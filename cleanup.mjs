import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

// Remove the misplaced .next folder from src directory
const wrongNextPath = path.join(__dirname, "src", ".next");
if (fs.existsSync(wrongNextPath)) {
    console.log("🧹 Removing misplaced .next folder from src directory...");
    deleteFolderRecursive(wrongNextPath);
    console.log("✅ Cleaned up misplaced .next folder");
} else {
    console.log("✅ No cleanup needed - .next folder is not in src directory");
}

// Also clean up the correct .next folder if it exists
const correctNextPath = path.join(__dirname, ".next");
if (fs.existsSync(correctNextPath)) {
    console.log("🧹 Cleaning existing .next build folder...");
    deleteFolderRecursive(correctNextPath);
    console.log("✅ Cleaned up .next build folder");
}

console.log("🎉 Cleanup complete! Ready for fresh build.");
