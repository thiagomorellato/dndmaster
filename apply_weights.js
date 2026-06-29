const fs = require('fs');

// 1. Fix VitalsWidget.tsx totalWeight calculation
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
const searchWeight = `  let totalWeight = 0;
  equipment.forEach(eq => {
    if (eq.weight) totalWeight += eq.weight;
  });`;

const replaceWeight = `  let totalWeight = 0;
  equipment.forEach(eq => {
    if (eq.weight) {
      if (eq.type === 'ammunition' && eq.customResourceMax !== undefined) {
        totalWeight += eq.weight * eq.customResourceMax;
      } else {
        totalWeight += eq.weight;
      }
    }
  });`;

vw = vw.replace(searchWeight, replaceWeight);
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

// 2. Fix DashboardScreen.tsx modal title
let ds = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');

const searchModal = `<View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Gerenciador de Moedas</Text>
              <TouchableOpacity onPress={() => setCoinsModalVisible(false)}>
                <Ionicons name="close" size={22} color={colors.textMuted} />
              </TouchableOpacity>
            </View>`;

const replaceModal = `<View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Gerenciador de Moedas</Text>
                <Text style={{ color: colors.textMuted, fontSize: 13, marginTop: 4, fontWeight: '500' }}>
                  Peso total: {(((parseInt(editCP)||0) + (parseInt(editSP)||0) + (parseInt(editEP)||0) + (parseInt(editGP)||0) + (parseInt(editPP)||0)) / 50).toFixed(1)} lb
                </Text>
              </View>
              <TouchableOpacity onPress={() => setCoinsModalVisible(false)}>
                <Ionicons name="close" size={22} color={colors.textMuted} />
              </TouchableOpacity>
            </View>`;

// Fallback in case spacing is weird
ds = ds.replace(/<View style=\{styles\.modalHeader\}>[\s\S]*?<Text style=\{styles\.modalTitle\}>Gerenciador de Moedas<\/Text>[\s\S]*?<\/TouchableOpacity>\s*<\/View>/, replaceModal);

fs.writeFileSync('src/screens/DashboardScreen.tsx', ds);
console.log('Fixed weights');
