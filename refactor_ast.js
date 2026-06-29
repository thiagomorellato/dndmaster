const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();

const filesToProcess = [
  'src/components/CharacterTab.tsx',
  'src/components/VitalsWidget.tsx',
  'src/components/EquipmentTracker.tsx',
  'src/components/ResourceTracker.tsx'
];

for (const filePath of filesToProcess) {
  if (!fs.existsSync(filePath)) continue;
  
  const sourceFile = project.addSourceFileAtPath(filePath);

  // 1. Add missing imports
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

  // 2. Change const styles = StyleSheet.create(...) to const createStyles = (colors: ThemeColors) => StyleSheet.create(...)
  const stylesVar = sourceFile.getVariableStatement('styles');
  if (stylesVar) {
    const decl = stylesVar.getDeclarations()[0];
    const initializer = decl.getInitializer();
    if (initializer) {
      const initText = initializer.getText();
      decl.setInitializer(`(colors: ThemeColors) => ${initText}`);
      decl.rename('createStyles');
    }
  }

  // 3. Inject useTheme and styles memo into function components
  const functions = sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction);
  for (const func of functions) {
    // Check if it's a component (has JSX elements returned)
    const hasJsx = func.getDescendantsOfKind(SyntaxKind.JsxElement).length > 0 || 
                   func.getDescendantsOfKind(SyntaxKind.JsxFragment).length > 0 ||
                   func.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement).length > 0;
    
    // Make sure it's assigned to a variable starting with capital letter
    const parent = func.getParentIfKind(SyntaxKind.VariableDeclaration);
    if (parent && hasJsx) {
      const name = parent.getName();
      if (/^[A-Z]/.test(name)) {
        const body = func.getBody();
        if (body.getKind() === SyntaxKind.Block) {
          const block = body;
          // Check if already injected
          const statements = block.getStatements();
          let injected = false;
          for (const stmt of statements) {
            if (stmt.getText().includes('useTheme()')) injected = true;
          }
          
          if (!injected) {
            block.insertStatements(0, [
              'const { colors } = useTheme();',
              'const styles = React.useMemo(() => createStyles(colors), [colors]);'
            ]);
            console.log(`Injected hooks into ${name} in ${filePath}`);
          }
        }
      }
    }
  }

  sourceFile.saveSync();
  console.log(`AST processed ${filePath}`);

  // 4. Do the color replacements using simple regex on the saved file
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/'rgba\(15, 23, 42, 0.45\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.6\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.65\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.75\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.8\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.85\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.95\)'/g, 'colors.overlayBg');
  content = content.replace(/'rgba\(15, 23, 42, 0.35\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(15, 23, 42, 0.5\)'/g, 'colors.surfaceSecondary');
  
  // React native specific JSX colors replacements
  content = content.replace(/color="#0F172A"/g, 'color={colors.textMain}');
  content = content.replace(/color="#F59E0B"/g, 'color={colors.accentAmber}');
  content = content.replace(/borderColor: '#334155'/g, 'borderColor: colors.borderHighlight');
  
  // Style object hex colors
  content = content.replace(/'#0F172A'/g, 'colors.textMain');
  content = content.replace(/'#F59E0B'/g, 'colors.accentAmber');
  
  fs.writeFileSync(filePath, content);
  console.log(`Regex processed ${filePath}`);
}
