const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const filesToProcess = [
  'src/components/CharacterTab.tsx',
  'src/components/VitalsWidget.tsx',
  'src/components/EquipmentTracker.tsx',
  'src/components/ResourceTracker.tsx'
];

for (const filePath of filesToProcess) {
  if (!fs.existsSync(filePath)) continue;

  // 1. Text-based replacements to avoid AST renaming magic
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace('const styles = StyleSheet.create', 'const createStyles = (colors: ThemeColors) => StyleSheet.create');
  content = content.replace(/'rgba\(15, 23, 42, 0.45\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.6\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.65\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.75\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.8\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.85\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.95\)'/g, 'colors.overlayBg');
  content = content.replace(/'rgba\(15, 23, 42, 0.35\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.5\)'/g, 'colors.surfaceSecondary');
  
  content = content.replace(/color="#0F172A"/g, 'color={colors.textMain}');
  content = content.replace(/color="#F59E0B"/g, 'color={colors.accentAmber}');
  content = content.replace(/borderColor: '#334155'/g, 'borderColor: colors.borderHighlight');
  
  content = content.replace(/'#0F172A'/g, 'colors.textMain');
  content = content.replace(/'#F59E0B'/g, 'colors.accentAmber');
  fs.writeFileSync(filePath, content);

  // 2. AST-based hook injection
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const hasUseTheme = sourceFile.getImportDeclaration(decl => decl.getModuleSpecifierValue() === '../context/ThemeContext');
  if (!hasUseTheme) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: '../context/ThemeContext',
      namedImports: ['useTheme', 'ThemeColors']
    });
  }

  if (filePath.includes('VitalsWidget.tsx')) {
    const hasImagePicker = sourceFile.getImportDeclaration(decl => decl.getModuleSpecifierValue() === 'expo-image-picker');
    if (!hasImagePicker) {
      sourceFile.addImportDeclaration({
        moduleSpecifier: 'expo-image-picker',
        namespaceImport: 'ImagePicker'
      });
    }
  }

  const functions = sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction);
  for (const func of functions) {
    const hasJsx = func.getDescendantsOfKind(SyntaxKind.JsxElement).length > 0 || 
                   func.getDescendantsOfKind(SyntaxKind.JsxFragment).length > 0 ||
                   func.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement).length > 0;
    
    const parent = func.getParentIfKind(SyntaxKind.VariableDeclaration);
    if (parent && hasJsx) {
      const name = parent.getName();
      if (/^[A-Z]/.test(name)) {
        const body = func.getBody();
        if (body.getKind() === SyntaxKind.Block) {
          const block = body;
          const statements = block.getStatements();
          let injectedColors = false;
          let injectedStyles = false;
          
          for (const stmt of statements) {
            if (stmt.getText().includes('useTheme()')) injectedColors = true;
            if (stmt.getText().includes('createStyles(colors)')) injectedStyles = true;
          }
          
          if (!injectedStyles) {
            block.insertStatements(0, 'const styles = React.useMemo(() => createStyles(colors), [colors]);');
          }
          if (!injectedColors) {
            block.insertStatements(0, 'const { colors } = useTheme();');
          }
        }
      }
    }
  }
  sourceFile.saveSync();
  console.log(`Processed ${filePath}`);
}
