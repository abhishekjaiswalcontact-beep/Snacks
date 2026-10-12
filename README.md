# Aayusha Swad — Traditional Indian Snacks E-Commerce Storefront

> **"Traditional Taste, Made with Love"**  
> *Authentic Indian traditional snacks, homemade goodness, natural ingredients, and heirloom recipes.*

Aayusha Swad is a modern, responsive e-commerce showcase website crafted with Next.js (App Router), TypeScript, and Tailwind CSS. It combines authentic Indian visual culture (warm turmeric yellow, soft cream, light saffron orange, deep earthy brown, and muted olive green) with a smooth shopping experience.

---

## 🌟 Highlights & Features

1. **Brand Identity & Traditional Indian Palette**:
   - Primary colours: Warm Turmeric (`#E9B949`), Soft Cream (`#FFF8E9`), Saffron Orange (`#E9A15A`), Deep Earthy Brown (`#603D2A`), and Muted Olive Green (`#66734B`).
   - Subtle traditional rangoli and jali patterns, elegant typography, and artisanal food presentation.

2. **Homepage Sections**:
   - **Hero Section**: Brand statement, call-to-actions, floating quality badges (*Slow Roasted*, *Pure Desi Ghee*, *Small Batch*).
   - **Shop by Category**: Makhana, Thekua, Traditional Cookies, Namak Para, Traditional Indian Snacks.
   - **Featured Products**: Signature collection with interactive category filter tabs, pack size selectors, and Quick View modal.
   - **Brand Story ("Bringing the Taste of Tradition to Every Home")**: Editorial narrative celebrating grandmother's kitchen nostalgia and honest home cooking.
   - **Why Choose Aayusha Swad?**: 4 brand value cards (*Traditional Recipes*, *Carefully Selected Ingredients*, *Authentic Indian Flavours*, *Made with Love*).
   - **Product Showcase / Gallery**: Authentic snack textures and Indian tea-time moments.
   - **Taste of Tradition Testimonials**: Transparently framed sample feedback from tasting circles.
   - **Newsletter Section**: Interactive showcase email subscription.
   - **Footer**: Brand story, categories, quick links, configurable contact details, and policy placeholders.

3. **Shop Page (`/shop`)**:
   - Interactive search interface across product names, Hindi names, and tags.
   - Category filtering and dietary/flavour pills (*Bestseller*, *Desi Ghee*, *Spicy*, *Traditional*, *Sweet*).
   - Dynamic sorting: Price (Low to High, High to Low), Highest Rated, Alphabetical (A-Z), and Featured.
   - Live product count counter and filter reset button.

4. **Product Detail Pages (`/shop/[slug]`)**:
   - Fully static pre-rendered routes for all products (SEO-optimized with OpenGraph tags).
   - Multi-photo gallery preview.
   - Pack size variant selector with dynamic price updates.
   - Transparent ingredient list and moisture-lock storage instructions.
   - WhatsApp order inquiry button with pre-filled message.
   - Related snack recommendations.

5. **Shopping Basket (Showcase Demo)**:
   - Slide-over cart drawer with persistent `localStorage` synchronization.
   - Real-time Free Shipping progress meter (Free shipping threshold: ₹499).
   - Quantity controls and item removal.
   - Checkout modal explaining the showcase status, with instant WhatsApp order transmission and demo checkout simulation.

6. **Centralized Data Management**:
   - All product catalog data, categories, prices, weights, ingredients, images, and brand contacts live in **`src/data/products.ts`**. Update this single file to change anything on the website!

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & custom design tokens
- **Icons**: Lucide React
- **Fonts**: Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif)
- **SEO**: Static Site Generation (SSG), dynamic `sitemap.ts`, `robots.ts`, dynamic brand favicon `icon.tsx`

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm (or yarn / pnpm)

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### 3. Test Production Build
```bash
npm run build
npm start
```

---

## 📦 How to Deploy on Vercel

Deploying this showcase to Vercel takes less than 2 minutes:

### Method A: Deploy via GitHub (Recommended)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aayusha Swad storefront"
   ```

2. **Push to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new) named `aayusha-swad`.
   - Push your local code:
     ```bash
     git remote add origin https://github.com/<your-username>/aayusha-swad.git
     git branch -M main
     git push -u origin main
     ```

3. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your `aayusha-swad` repository and click **Import**.
   - Framework Preset will automatically be detected as **Next.js**.
   - Click **Deploy**. Vercel will build and assign you a live URL (e.g., `https://aayusha-swad.vercel.app`).

### Method B: Deploy using Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Run from the project root:
   ```bash
   vercel
   ```
   Follow the brief prompts (select default settings, Next.js will be detected automatically).

3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📝 Updating Products & Brand Content

To add or modify products, open:
📁 `src/data/products.ts`

Each product item follows this simple format:
```typescript
{
  id: "prod-1",
  slug: "peri-peri-makhana",
  name: "Peri Peri Makhana",
  hindiName: "पेरी पेरी मखाना",
  category: "Makhana",
  price: 180,
  originalPrice: 220,
  weight: "100g",
  availableWeights: [
    { weight: "100g", price: 180 },
    { weight: "250g", price: 420 },
  ],
  rating: 4.9,
  reviewCount: 148,
  isBestSeller: true,
  shortDescription: "...",
  description: "...",
  ingredients: ["Jumbo Foxnuts", "Paprika", "Himalayan Pink Salt", ...],
  features: ["Slow Roasted (Not Fried)", "Zero Trans Fat", ...],
  storageInstructions: "...",
  images: ["https://..."],
  tags: ["Makhana", "Spicy", "Healthy"],
}
```

Brand settings (phone number, email, free shipping threshold) are located at the bottom of the same file in `BRAND_CONFIG`.
