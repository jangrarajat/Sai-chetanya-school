import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Map of emoji to lucide icon replacements
const emojiReplacements = {
  '✓': '<CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />',
  '❤️': '<Heart size={14} className="inline text-red-500" />',
  '🎓': '<GraduationCap size={18} className="text-purple-300" />',
  '📚': '<BookOpen size={20} />',
  '📖': '<BookOpen size={20} />',
  '🎭': '<Palette size={20} />',
  '⏰': '<Clock size={18} className="text-purple-300" />',
  '📞': '<Phone size={18} className="text-purple-300" />',
};

function replaceEmojisInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    for (const [emoji, icon] of Object.entries(emojiReplacements)) {
      if (content.includes(emoji)) {
        content = content.replace(new RegExp(emoji.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), icon);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      replaceEmojisInFile(filePath);
    }
  });
}

console.log('Starting emoji replacement...');
walkDirectory(path.join(__dirname, 'client/src'));
console.log('Done!');
