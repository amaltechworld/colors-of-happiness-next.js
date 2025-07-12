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

console.log("Updating gallery logos to be fully responsive...");

files.forEach((file) => {
    try {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, "utf8");

        // Update the logo responsive classes to match the new standard
        content = content.replace(
            /className="object-contain w-16 h-8 sm:w-20 sm:h-10 md:w-20 md:h-10"/g,
            'className="object-contain w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"'
        );

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Updated: ${file}`);
    } catch (error) {
        console.error(`❌ Error updating ${file}:`, error.message);
    }
});

console.log("Gallery logo responsive update complete!");
