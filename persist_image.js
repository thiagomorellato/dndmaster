const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Add import
if (!vitals.includes("import * as FileSystem from 'expo-file-system';")) {
  vitals = vitals.replace("import * as ImagePicker from 'expo-image-picker';", "import * as ImagePicker from 'expo-image-picker';\nimport * as FileSystem from 'expo-file-system';");
}

// Update pickImage
const oldPickImage = `  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        if (onUpdateImageUrl) onUpdateImageUrl(result.assets[0].uri);
        setAvatarModalVisible(false);
      }
    } catch (e) {
      console.warn("Erro ao selecionar imagem", e);
    }
  };`;

const newPickImage = `  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const sourceUri = result.assets[0].uri;
        const filename = sourceUri.split('/').pop() || \`avatar_\${Date.now()}.jpg\`;
        const destUri = FileSystem.documentDirectory + filename;
        
        // Copy file to persistent storage
        await FileSystem.copyAsync({
          from: sourceUri,
          to: destUri
        });
        
        if (onUpdateImageUrl) onUpdateImageUrl(destUri);
        setAvatarModalVisible(false);
      }
    } catch (e) {
      console.warn("Erro ao selecionar imagem", e);
    }
  };`;

vitals = vitals.replace(oldPickImage.replace(/\r\n/g, '\n'), newPickImage);
vitals = vitals.replace(oldPickImage, newPickImage);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Added persistent image copy logic!');
