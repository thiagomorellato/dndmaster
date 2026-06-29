const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Remove FileSystem import
vitals = vitals.replace("import * as FileSystem from 'expo-file-system/legacy';\n", "");

const oldPickImage = `  const pickImage = async () => {
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

const newPickImage = `  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.3, // reduce quality to save space
        base64: true, // Request base64 to store in JSON directly
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.base64) {
          // Store directly as base64 data URI to avoid temporary file cleanup issues
          const dataUri = \`data:image/jpeg;base64,\${asset.base64}\`;
          if (onUpdateImageUrl) onUpdateImageUrl(dataUri);
        } else {
          // Fallback to URI if base64 fails
          if (onUpdateImageUrl) onUpdateImageUrl(asset.uri);
        }
        setAvatarModalVisible(false);
      }
    } catch (e) {
      console.warn("Erro ao selecionar imagem", e);
    }
  };`;

vitals = vitals.replace(oldPickImage.replace(/\r\n/g, '\n'), newPickImage);
vitals = vitals.replace(oldPickImage, newPickImage);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Reverted to base64 image approach');
