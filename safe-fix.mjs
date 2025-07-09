import fs from "fs";

let content = fs.readFileSync(
    "src/app/gallery/clients/client1/page.tsx",
    "utf8"
);

// Very simple and safe regex - only match images that don't already have sizes
// This pattern will only match lines that have style={{ objectFit: "cover" }} followed immediately by />
// and ensures we don't modify images that already have sizes prop

const imagesToFix = [
    // Find all occurrences where style is immediately followed by />
    {
        // Pattern: style={{ objectFit: "cover" }} followed by /> (no sizes prop)
        search: /(\s+src={getImagePath\(\d+\)}[\s\S]*?alt="Image \d+"[\s\S]*?fill[\s\S]*?style={{ objectFit: "cover" }})\s*\/>/g,
        replace: function (match, beforeStyle) {
            // Only replace if 'sizes=' is not already in the match
            if (match.includes("sizes=")) {
                return match; // Don't change if sizes already exists
            }

            // Extract image number to determine correct sizes value
            const imageMatch = match.match(/getImagePath\((\d+)\)/);
            const imageNum = imageMatch ? parseInt(imageMatch[1]) : 0;

            // Determine if it's a side-by-side image based on context
            // Side by side images: 2, 3, 6, 7, 9, 10, 12, 13, 15, 16, 19, 20, 21, 22, 29, 30
            const sideByImages = [
                2, 3, 6, 7, 9, 10, 12, 13, 15, 16, 19, 20, 21, 22, 29, 30,
            ];
            // Constrained images: 4, 18, 23
            const constrainedImages = [4, 18, 23];

            let sizesValue;
            if (sideByImages.includes(imageNum)) {
                sizesValue =
                    "(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw";
            } else if (constrainedImages.includes(imageNum)) {
                sizesValue =
                    "(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw";
            } else {
                sizesValue =
                    "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw";
            }

            return `${beforeStyle}
                                    sizes="${sizesValue}"
                                />`;
        },
    },
];

// Apply the fix
content = content.replace(imagesToFix[0].search, imagesToFix[0].replace);

// Write back
fs.writeFileSync("src/app/gallery/clients/client1/page.tsx", content);

console.log(
    "✅ Safely added sizes to images that were missing them (without breaking existing code)"
);
