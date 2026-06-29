const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Remove from WeaponCard
const weaponCardRegex = /\s*const pickImage = async \(\) => \{[\s\S]*?console\.warn\("Erro ao selecionar imagem", e\);\s*\}\s*\};\s*/;
vitals = vitals.replace(weaponCardRegex, '\n\n');

// Insert into VitalsWidget
const vitalsRegex = /const styles = useStyles\(colors\);/;
const replacement = `const styles = useStyles(colors);\n
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.8,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        if (onUpdateImageUrl) onUpdateImageUrl(result.assets[0].uri);
        setAvatarModalVisible(false);
      }
    } catch (e) {
      console.warn("Erro ao selecionar imagem", e);
    }
  };
`;

vitals = vitals.replace(vitalsRegex, replacement);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Fixed pickImage location');
