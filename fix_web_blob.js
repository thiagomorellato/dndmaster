const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

const oldPickImage = `  const pickImage = async () => {
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

const newPickImage = `  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.3,
        base64: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.base64) {
          const dataUri = \`data:image/jpeg;base64,\${asset.base64}\`;
          if (onUpdateImageUrl) onUpdateImageUrl(dataUri);
          setAvatarModalVisible(false);
        } else if (Platform.OS === 'web' && asset.uri) {
          // No web, o expo-image-picker pode não retornar base64 nativamente. 
          // Retorna um blob: URL que expira ao recarregar. Precisamos converter o blob para base64.
          try {
            const response = await fetch(asset.uri);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onloadend = () => {
              if (onUpdateImageUrl) onUpdateImageUrl(reader.result as string);
              setAvatarModalVisible(false);
            };
            reader.readAsDataURL(blob);
          } catch (fetchErr) {
            console.warn("Erro ao converter blob para base64", fetchErr);
            if (onUpdateImageUrl) onUpdateImageUrl(asset.uri);
            setAvatarModalVisible(false);
          }
        } else {
          if (onUpdateImageUrl) onUpdateImageUrl(asset.uri);
          setAvatarModalVisible(false);
        }
      }
    } catch (e) {
      console.warn("Erro ao selecionar imagem", e);
    }
  };`;

vitals = vitals.replace(oldPickImage.replace(/\r\n/g, '\n'), newPickImage);
vitals = vitals.replace(oldPickImage, newPickImage);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Added Web FileReader fallback for base64');
