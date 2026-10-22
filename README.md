# Raivatedu — Marketing Website

A production-quality marketing website for **Raivatedu**, an education and learning platform. Built as part of the Frontend Internship selection process.

## 🚀 Live Demo
[https://koursera.vercel.app](https://koursera.vercel.app)

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans (Display) & Inter (Body) via `next/font`
- **Deployment:** Vercel

## 💻 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Mohd-Hamza-123/Koursera.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design & Brand Choices
- **Colour Palette:** I chose Indigo (`#4f46e5`) for trust and credibility, paired with a Sunny Yellow (`#facc15`) to add youthful, energetic accents. The background is a soft off-white (`#fafaf9`) to reduce eye strain and keep the UI feeling clean.
- **Typography:** Used *Plus Jakarta Sans* for headings because it feels rounded, friendly, and modern. Used *Inter* for body text due to its high legibility.
- **Spacing & Components:** Created reusable `Section`, `Button`, `Accordion`, and `CourseCard` components to ensure a consistent layout across all pages and avoid repetitive code.

## 📝 Assumptions Made
- **Mock Data:** All course data, mentor names, reviews, and testimonials are illustrative mock data created for demonstration purposes, as specific course catalogs were not provided in the brief.
- **Avatars:** Images and illustrations were replaced with initials-based avatars to maintain fast loading speeds and high Lighthouse scores without relying on external stock images.
- **Links:** Social media links in the footer and some navigation links (like "Privacy Policy") are placeholders.

## 🚧 What I would improve with more time
- Add a fully functional dark-mode toggle (using `next-themes`).
- Implement actual authentication and a checkout flow for the "Enrol Now" button.
- Add Framer Motion for smooth page transitions and scroll-reveal animations.
- Integrate a real search API (e.g., Algolia) to make the Hero search bar functional.


```
