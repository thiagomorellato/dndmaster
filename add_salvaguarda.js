const fs = require('fs');

let content = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// The replacement logic:
const searchBlock = `              return (
                <View key={stat} style={styles.skillsColumn}>
                  {skills.map(skill => {`;

const replaceBlock = `              const statNameMapping: Record<string, string> = {
                str: 'Força',
                dex: 'Destreza',
                con: 'Constituição',
                int: 'Inteligência',
                wis: 'Sabedoria',
                cha: 'Carisma'
              };
              const hasSavingThrow = classDefaults.savingThrows.includes(statNameMapping[stat]);

              return (
                <View key={stat} style={styles.skillsColumn}>
                  <View 
                    style={[
                      styles.columnSkillItem,
                      hasSavingThrow && styles.columnSkillItemProficient,
                      { marginBottom: 4 }
                    ]}
                  >
                    <View style={{ marginRight: 4, justifyContent: 'center' }}>
                      <Ionicons name="ellipse" size={4} color={hasSavingThrow ? colors.accentAmber : colors.textMuted} />
                    </View>
                    <Text 
                      style={[styles.columnSkillName, hasSavingThrow && styles.columnSkillNameProficient]}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      minimumFontScale={0.75}
                    >
                      Salvaguarda
                    </Text>
                  </View>

                  {skills.map(skill => {`;

content = content.replace(searchBlock, replaceBlock);

fs.writeFileSync('src/components/VitalsWidget.tsx', content);
console.log('Added Salvaguarda row to skills columns');
