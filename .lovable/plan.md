## Goal

Use your uploaded sidewalk before/after photo as the **Residential — "House exterior cleaning in Groveland"** image in the Gallery, and remove the text overlay (category + description) that appears on hover for this image.

## Changes

### 1. Add the uploaded photo to the project
- Copy `user-uploads://IMG_4577.jpg` into `src/assets/` as `gallery-sidewalk-before-after.jpg` so it can be imported and bundled properly.

### 2. Update `src/pages/Gallery.tsx`
- Import the new asset at the top of the file.
- Replace the `src` of the gallery item with `id: 1` (currently the Unsplash photo at line 25) with the imported image.
- Update its `description` to a short, accurate alt text (e.g. "Sidewalk pressure washing before and after in Groveland") so screen readers and SEO still get meaningful info — this is used as the `alt` attribute, not displayed visually.
- Remove the visible hover caption **only for this image** by hiding the overlay text block when `image.id === 1`. The dark gradient + hover zoom effect stays consistent with the rest of the grid; only the "Residential / House exterior cleaning in Groveland" words are removed from view.

## Notes

- Other gallery items keep their current hover captions.
- Filtering by "Residential" still includes this image.
- No other pages or components are affected.
