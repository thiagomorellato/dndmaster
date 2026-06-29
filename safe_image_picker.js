const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// 1. Insert pickImage inside VitalsWidget component
const search1 = `const [tempImageUrl, setTempImageUrl] = useState('');\n  const { colors } = useTheme();\n  const styles = useStyles(colors);`;

const replace1 = `const [tempImageUrl, setTempImageUrl] = useState('');\n  const { colors } = useTheme();\n  const styles = useStyles(colors);\n\n  const pickImage = async () => {\n    try {\n      const result = await ImagePicker.launchImageLibraryAsync({\n        mediaTypes: ImagePicker.MediaTypeOptions.Images,\n        allowsEditing: true,\n        aspect: [4, 4],\n        quality: 0.8,\n      });\n      if (!result.canceled && result.assets && result.assets.length > 0) {\n        if (onUpdateImageUrl) onUpdateImageUrl(result.assets[0].uri);\n        setAvatarModalVisible(false);\n      }\n    } catch (e) {\n      console.warn("Erro ao selecionar imagem", e);\n    }\n  };`;

vitals = vitals.replace(search1, replace1);

// 2. Replace Modal buttons
const search2 = `<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
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

const replace2 = `<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
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

vitals = vitals.replace(search2, replace2);

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Fixed picker with node script safely');
