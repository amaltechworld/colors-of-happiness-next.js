const fs = require("fs");

const clientFiles = [
    "src/app/gallery/clients/client1/page.tsx",
    "src/app/gallery/clients/client2/page.tsx",
    "src/app/gallery/clients/client3/page.tsx",
    "src/app/gallery/clients/client4/page.tsx",
];

clientFiles.forEach((filePath) => {
    try {
        let content = fs.readFileSync(filePath, "utf8");

        // Remove border-4 border-red-500
        content = content.replace(/border-4 border-red-500 /g, "");
        content = content.replace(/border-4 border-red-500/g, "");

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Removed borders from ${filePath}`);
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
});

console.log("🎉 Border removal complete!");
