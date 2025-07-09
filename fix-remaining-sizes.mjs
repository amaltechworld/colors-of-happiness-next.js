import fs from "fs";

// Read the current file
let content = fs.readFileSync(
    "src/app/gallery/clients/client1/page.tsx",
    "utf8"
);

// More comprehensive regex to catch ALL images without sizes prop
// This will match any Image component that has style={{ objectFit: "cover" }} but no sizes prop

const patterns = [
    // Pattern for images that end with style={{ objectFit: "cover" }} />
    // and don't already have sizes
    {
        regex: /(src={getImagePath\(\d+\)}[\s\S]*?alt="Image \d+"[\s\S]*?fill[\s\S]*?style={{ objectFit: "cover" }})\s*\/>/g,
        replacement: function (match, p1) {
            // Check if this match already contains 'sizes='
            if (match.includes("sizes=")) {
                return match; // Don't modify if sizes already exists
            }

            // Determine the appropriate sizes value based on the image context
            // Extract image number for context
            const imageNumMatch = match.match(/getImagePath\((\d+)\)/);
            const imageNum = imageNumMatch ? parseInt(imageNumMatch[1]) : 0;

            // Side by side images: 2, 3, 6, 7, 9, 10, 12, 13, 15, 16, 19, 20, 21, 22, 29, 30
            const sideByMoodImages = [
                2, 3, 6, 7, 9, 10, 12, 13, 15, 16, 19, 20, 21, 22, 29, 30,
            ];
            // Constrained width images: 4, 18, 23
            const constrainedImages = [4, 18, 23];

            let sizesValue;
            if (sideByMoodImages.includes(imageNum)) {
                sizesValue =
                    "(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw";
            } else if (constrainedImages.includes(imageNum)) {
                sizesValue =
                    "(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw";
            } else {
                // Full width images
                sizesValue =
                    "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw";
            }

            return `${p1}
                                sizes="${sizesValue}"
                            />`;
        },
    },
];

// Apply the pattern
patterns.forEach((pattern) => {
    if (typeof pattern.replacement === "function") {
        content = content.replace(pattern.regex, pattern.replacement);
    } else {
        content = content.replace(pattern.regex, pattern.replacement);
    }
});

// Write the file back
fs.writeFileSync("src/app/gallery/clients/client1/page.tsx", content);

console.log(
    "✅ Added sizes props to all remaining images that were missing them"
);
