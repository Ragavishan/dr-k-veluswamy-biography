# Dr. K. Veluswamy — Interactive Biography Website

Premium navy, ivory and gold biography website starter built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

1. Install Node.js 20.9+.
2. Extract this folder.
3. In a terminal inside the project:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000.

## Included

- Responsive luxury-style homepage
- Biography section with blue clickable story links
- Reusable modal with image, title, year and description
- Story cards / chapter grid
- Keyboard Escape support and click-outside-to-close
- Reduced-motion CSS support
- Basic SEO metadata

## Important before launch

- The photos are illustrative remote Unsplash images. Replace them with approved, authentic photographs of Dr. Veluswamy, his family, institutions and facilities.
- Story copy is based on the user-provided Word document and is intentionally cautious where details need verification.
- Verify qualifications, institution names, dates, branch counts, awards and all medical claims with official records.
- Add modal focus trapping / focus restoration and test accessibility before production.
- The quote-style sentence on the homepage is editorial copy, not a quotation from Dr. Veluswamy.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  StoryModal.tsx
data/
  topics.ts
```
