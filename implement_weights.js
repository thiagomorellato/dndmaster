const fs = require('fs');

const file = 'src/components/EquipmentTracker.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update onAddItem interface
content = content.replace(
  /description\?: string;\s*\}/,
  'description?: string;\n      weight?: number;\n      customResourceName?: string;\n      customResourceMax?: number;\n      linkedSpellName?: string;\n    }'
);

// Add weight to newItem object
const searchNewItem = `const newItem: any = {
        name,
        type,
        isMagic,
        description,
      };`;
const replaceNewItem = `const newItem: any = {
        name,
        type,
        isMagic,
        description,
        weight: weight ? parseFloat(weight) : undefined,
      };`;
content = content.replace(searchNewItem, replaceNewItem);

// Add setWeight('') to Reset Form
content = content.replace(/setSelectedMagicItem\(null\);/, "setSelectedMagicItem(null);\n      setWeight('');");

// Add TextInput for weight in the form (under custom mode)
const searchDescriptionInput = `                <TextInput
                  style={[styles.textInput, { height: 60, textAlignVertical: 'top' }]}
                  placeholder="Descrição do item..."
                  placeholderTextColor={colors.textMuted}
                  value={description}
                  onChangeText={setDescription}
                  multiline
                />`;
const replaceDescriptionInput = searchDescriptionInput + `\n
                <TextInput
                  style={[styles.textInput, { marginTop: 12 }]}
                  placeholder="Peso (lb)"
                  placeholderTextColor={colors.textMuted}
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
                />`;
content = content.replace(searchDescriptionInput, replaceDescriptionInput);

// Show weight in renderItemCard
const searchItemName = `<Text style={[styles.itemName, item.equipped && styles.itemNameEquipped]}>{item.name}</Text>`;
const replaceItemName = `<Text style={[styles.itemName, item.equipped && styles.itemNameEquipped]}>{item.name}</Text>\n                  {item.weight !== undefined && <Text style={{ color: colors.textMuted, fontSize: 11, marginLeft: 4 }}>({item.weight} lb)</Text>}`;
content = content.replace(searchItemName, replaceItemName);

fs.writeFileSync(file, content);
console.log('Added weights to EquipmentTracker');
