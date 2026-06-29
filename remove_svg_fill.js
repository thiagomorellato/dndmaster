const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.svg')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const svgFiles = walkSync('assets/icons');
let modified = 0;

for (const file of svgFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/fill=\"(currentColor|#fff|#ffffff)\"/gi, '');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    modified++;
  }
}

console.log('Modified SVGs (removed fill):', modified);
