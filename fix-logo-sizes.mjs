import fs from "fs";
import path from "path";

const files = [
    "src/app/gallery/page.tsx",
    "src/app/gallery/clients/client1/page.tsx",
    "src/app/gallery/clients/client2/page.tsx",
    "src/app/gallery/clients/client3/page.tsx",
    "src/app/gallery/clients/client4/page.tsx",
    "src/app/gallery/videos/client1/page.tsx",
    "src/app/gallery/videos/client2/page.tsx",
    "src/app/gallery/videos/client3/page.tsx",
    "src/app/gallery/videos/client4/page.tsx",
];

console.log("Fixing all gallery logos to match hero logo exactly...");

files.forEach((file) => {
    try {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, "utf8");

        // Remove the lg: classes that make logos too big
        content = content.replace(
            /className="object-contain w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"/g,
            'className="object-contain w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10"'
        );

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Updated: ${file}`);
    } catch (error) {
        console.error(`❌ Error updating ${file}:`, error.message);
    }
});

console.log("Gallery logo consistency fix complete!");
