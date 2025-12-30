# The Ladder – Multi-Department Website Setup

## Project Overview
Complete folder structure and placeholder pages for a Next.js company website with two separate departments: Marketing and Technical.

## Completed Setup

### ✅ Folder Structure

```
the-ladder/
├── app/
│   ├── layout.tsx                 (Root layout - redirects to /marketing)
│   ├── page.tsx                   (Home redirect)
│   ├── globals.css
│   ├── marketing/
│   │   ├── layout.tsx             (Marketing department layout)
│   │   ├── page.tsx               (Marketing home)
│   │   ├── services/
│   │   │   └── page.tsx           (Marketing services)
│   │   ├── about/
│   │   │   └── page.tsx           (Marketing about us)
│   │   └── contact/
│   │       └── page.tsx           (Marketing contact)
│   └── technical/
│       ├── layout.tsx             (Technical department layout)
│       ├── page.tsx               (Technical home)
│       ├── products/
│       │   └── page.tsx           (Technical products)
│       ├── solutions/
│       │   └── page.tsx           (Technical solutions)
│       └── careers/
│           └── page.tsx           (Technical careers)
├── components/
│   ├── common/
│   │   ├── Navbar.tsx             (Shared navbar with department toggle)
│   │   └── Footer.tsx             (Shared footer placeholder)
│   ├── marketing/
│   │   ├── HomeSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   └── technical/
│       ├── HomeSection.tsx
│       ├── ProductsSection.tsx
│       ├── SolutionsSection.tsx
│       └── CareersSection.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.js
```

### ✅ Features Implemented

1. **Routing Structure**
   - `/marketing` - Marketing department root
   - `/technical` - Technical department root
   - All sub-pages properly organized with their own routes

2. **Marketing Department Pages**
   - `/marketing` → Home (Marketing – Home Page)
   - `/marketing/services` → Services (Marketing – Services Page)
   - `/marketing/about` → About Us (Marketing – About Us Page)
   - `/marketing/contact` → Contact Us (Marketing – Contact Us Page)

3. **Technical Department Pages**
   - `/technical` → Home (Technical – Home Page)
   - `/technical/products` → Products (Technical – Products Page)
   - `/technical/solutions` → Solutions (Technical – Solutions Page)
   - `/technical/careers` → Careers (Technical – Careers Page)

4. **Shared Navbar Component**
   - Shows company name "The Ladder"
   - Updates navigation links based on current department
   - Marketing nav: Home, Services, About, Contact
   - Technical nav: Home, Products, Solutions, Careers
   - Department toggle button (top-right)
   - Light theme for marketing, dark theme for technical

5. **Department-Specific Layouts**
   - Marketing layout: Light theme (white bg, gray text)
   - Technical layout: Dark theme (slate-950 bg, light gray text)
   - Both include the shared Navbar
   - Easy to style and customize later

6. **Component Organization**
   - `components/common/` - Shared Navbar and Footer
   - `components/marketing/` - Marketing section placeholders
   - `components/technical/` - Technical section placeholders
   - No mixing of department-specific components

### ✅ Tech Stack
- Next.js 16.1.1 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- No external UI libraries
- No backend/APIs

### ✅ How to Use

**Start the development server:**
```bash
npm run dev
```

The app will start at `http://localhost:3000` and automatically redirect to `/marketing`.

**Navigation:**
- Click navbar links to navigate between pages
- Click "Switch to Technical/Marketing" button to toggle departments
- Navigation links update automatically based on current department

**Next Steps - Adding Real Content:**
1. Replace placeholder headings and text in page.tsx files
2. Import and use section components from `components/marketing/` or `components/technical/`
3. Update layouts with real styling
4. Add actual content when Figma designs are available
5. Implement backend APIs if needed

### ✅ Status
- ✅ Folder structure complete
- ✅ All routes working
- ✅ Navigation working between pages
- ✅ Department toggle working
- ✅ Placeholder content in place
- ✅ Department-specific styling applied
- ✅ Ready for development

## Notes
- Root app redirects to `/technical` by default
- Navbar is client-side ('use client') for interactivity
- All pages include placeholder headings with department/page names
- Tailwind utility classes used for quick styling
- Easy to refactor and add real components later
