# Image Requirements for Gallery

## STATUS: LAYOUT TESTING MODE

**Currently testing layout with temporary red borders (4px) on all images.**

## Cover Images (for main gallery page):

-   `/public/gallery/clients/client1-cover.jpg`
-   `/public/gallery/clients/client2-cover.jpg`
-   `/public/gallery/clients/client3-cover.jpg`
-   `/public/gallery/clients/client4-cover.jpg`

## Individual Gallery Images:

### Client1 Gallery:

-   `/public/gallery/clients/client1/image1.jpg` (Featured single image)
-   `/public/gallery/clients/client1/image2.jpg` (Side-by-side left)
-   `/public/gallery/clients/client1/image3.jpg` (Side-by-side right)
-   `/public/gallery/clients/client1/image4.jpg` (Centered single image)
-   `/public/gallery/clients/client1/image5.jpg` (Side-by-side left)
-   `/public/gallery/clients/client1/image6.jpg` (Side-by-side right)
-   `/public/gallery/clients/client1/image7.jpg` (Centered single image)

### To add more images:

1. Add image files to the respective client folder
2. Update the `imageData` array in the page.tsx file
3. Configure layout: `sideBySide: true/false` and `wrapperClass` for styling

## Layout Features:

-   Responsive design (mobile-first)
-   Side-by-side images on larger screens
-   Centered single images
-   Configurable spacing and sizing
-   Red borders for layout verification (remove after testing)

## Fixed Issues:

-   ✅ Hydration mismatch error (added suppressHydrationWarning)
-   ✅ Improved border visibility (4px red borders)
-   ✅ Better responsive layout
-   ✅ Proper image aspect ratios
