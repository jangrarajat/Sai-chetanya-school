import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filesToUpdate = [
  'client/src/pages/Admission.tsx',
  'client/src/pages/ApexBranch.tsx',
  'client/src/pages/CampusTour360.tsx',
  'client/src/pages/CourseMilitary.tsx',
  'client/src/pages/CourseNavodaya.tsx',
  'client/src/pages/CourseRegular.tsx',
  'client/src/pages/CourseSainik.tsx',
  'client/src/pages/CourseSports.tsx',
  'client/src/pages/DirectorMessage.tsx',
  'client/src/pages/Home.tsx',
  'client/src/pages/HomeEnhanced.tsx',
  'client/src/pages/HomeEnhanced2.tsx',
  'client/src/pages/PercentageScholarship.tsx',
  'client/src/pages/Scholarship.tsx',
  'client/src/pages/ShivBhartiBranch.tsx',
];

const requiredIcons = {
  CheckCircle: 'CheckCircle',
  BookOpen: 'BookOpen',
  Palette: 'Palette',
  Clock: 'Clock',
  Phone: 'Phone',
  Heart: 'Heart',
  GraduationCap: 'GraduationCap',
};

function addIconsToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check which icons are used in the file
    const usedIcons = [];
    for (const icon of Object.keys(requiredIcons)) {
      if (content.includes(`<${icon}`)) {
        usedIcons.push(icon);
      }
    }
    
    if (usedIcons.length === 0) return;
    
    // Find the lucide-react import line
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    
    if (lucideImportMatch) {
      const currentImports = lucideImportMatch[1].split(',').map(i => i.trim());
      const newImports = [...new Set([...currentImports, ...usedIcons])].sort();
      const newImportLine = `import { ${newImports.join(', ')} } from 'lucide-react'`;
      const oldImportLine = lucideImportMatch[0];
      content = content.replace(oldImportLine, newImportLine);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Added icons to: ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Adding icon imports...');
filesToUpdate.forEach(file => {
  addIconsToFile(path.join(__dirname, file));
});
console.log('Done!');
