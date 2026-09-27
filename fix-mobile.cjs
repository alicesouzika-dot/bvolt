const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/components');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match absolute blur- elements and add hidden md:block
  const modified = content.replace(/(className="absolute[^"]*?blur-[^"]*?)(pointer-events-none[^"]*")/g, '$1 hidden md:block $2');
  if (content !== modified) {
    fs.writeFileSync(file, modified, 'utf8');
    console.log('Fixed', path.basename(file));
  }
});
