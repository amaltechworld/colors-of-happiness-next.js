import fs from "fs";

// Read the file
let content = fs.readFileSync(
    "src/app/gallery/clients/client1/page.tsx",
    "utf8"
);

// Define patterns and replacements for different image types
const patterns = [
    // Full width images (images 11, 14, 17, 23, 24, 25, 26, 27, 28, 31)
    {
        regex: /(src={getImagePath\((11|14|17|23|24|25|26|27|28|31)\)}[\s\S]*?alt="Image \1\d*"[\s\S]*?fill[\s\S]*?style={{ objectFit: "cover" }})\s*\/>/g,
        replacement:
            '$1\n                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"\n                            />',
    },
    // Side by side images (12, 13, 15, 16, 19, 20, 21, 22, 29, 30)
    {
        regex: /(src={getImagePath\((12|13|15|16|19|20|21|22|29|30)\)}[\s\S]*?alt="Image \1\d*"[\s\S]*?fill[\s\S]*?style={{ objectFit: "cover" }})\s*\/>/g,
        replacement:
            '$1\n                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"\n                            />',
    },
    // Constrained width images (18)
    {
        regex: /(src={getImagePath\(18\)}[\s\S]*?alt="Image 18"[\s\S]*?fill[\s\S]*?style={{ objectFit: "cover" }})\s*\/>/g,
        replacement:
            '$1\n                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"\n                            />',
    },
];

// Apply all patterns
patterns.forEach((pattern) => {
    content = content.replace(pattern.regex, pattern.replacement);
});

// Write the file back
fs.writeFileSync("src/app/gallery/clients/client1/page.tsx", content);

console.log("Fixed sizes props for all images");
