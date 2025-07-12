import fs from "fs";
import path from "path";

const files = [
    "src/app/gallery/page.tsx",
    "src/app/gallery/clients/client1/page.tsx",
    "src/app/gallery/clients/client2/page.tsx",
    "src/app/gallery/clients/client3/page.tsx",
    "src/app/gallery/clients/client4/page.tsx",
    "src/app/gallery/videos/page.tsx",
    "src/app/gallery/videos/client1/page.tsx",
    "src/app/gallery/videos/client2/page.tsx",
    "src/app/gallery/videos/client3/page.tsx",
    "src/app/gallery/videos/client4/page.tsx",
];

console.log("Restoring gallery logos to 80x40...");

files.forEach((file) => {
    try {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, "utf8");

        // Update the logo image attributes back to 80x40
        content = content.replace(
            /width={60}\s*height={30}/g,
            "width={80}\nheight={40}"
        );

        content = content.replace(
            /className="object-contain w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8"/g,
            'className="object-contain w-16 h-8 sm:w-20 sm:h-10 md:w-20 md:h-10"'
        );

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Updated: ${file}`);
    } catch (error) {
        console.error(`❌ Error updating ${file}:`, error.message);
    }
});

console.log("Gallery logo restoration complete!");
