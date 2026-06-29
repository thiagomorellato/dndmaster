const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

const pickImageCode = `
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

// Insert the pickImage function right before the return statement of VitalsWidget
vitals = vitals.replace(/return \(/, pickImageCode + '\n  return (');

// Update the Avatar modal in the render
const searchModal = `<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setAvatarModalVisible(false)} style={{ padding: 12, marginRight: 8 }}>
                    <Text style={{ color: colors.textMuted }}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => {
                      if (onUpdateImageUrl) onUpdateImageUrl(tempImageUrl);
                      setAvatarModalVisible(false);
                    }} 
                    style={{ padding: 12, backgroundColor: colors.accentAmber, borderRadius: 8 }}
                  >
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Salvar</Text>
                  </TouchableOpacity>
                </View>`;

const replaceModal = `<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                  <TouchableOpacity 
                    onPress={pickImage} 
                    style={{ flex: 1, padding: 12, backgroundColor: colors.surfaceHighlight, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: colors.border }}
                  >
                    <Text style={{ color: colors.textMain, fontWeight: 'bold' }}><Ionicons name="images-outline" size={16} /> Da Galeria</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setAvatarModalVisible(false)} style={{ padding: 12, marginRight: 8 }}>
                    <Text style={{ color: colors.textMuted }}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => {
                      if (onUpdateImageUrl) onUpdateImageUrl(tempImageUrl);
                      setAvatarModalVisible(false);
                    }} 
                    style={{ padding: 12, backgroundColor: colors.accentAmber, borderRadius: 8 }}
                  >
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Salvar URL</Text>
                  </TouchableOpacity>
                </View>`;

vitals = vitals.replace(searchModal, replaceModal);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Added pick image functionality');
