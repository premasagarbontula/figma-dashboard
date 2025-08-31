# Figma Dashboard - Shopping App

This is a React-based e-commerce shopping application built from a Figma design, featuring a Shop (product detail) page, variant selectors, payment options, cart management, and more.

---

## **Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## **Overview**

This project replicates the Figma design of NZ Honey Co.'s product pages. The goal was to build a fully responsive, modular, and maintainable front-end using React and Redux while closely following the UI/UX from the design.

---

## **Features**

- Fully responsive design for **desktop, tablet, and mobile devices**
- Shop (Product detail) page with:
  - Image carousel
  - UMF & MGO information
  - Variant and size selectors
  - Payment options (one-time & subscription)
  - Add to cart functionality with quantity selector
  - Reward points and delivery info
- Cart page with **clear cart** functionality
- Navbar with responsive menu and cart quantity indicator
- Dynamic interactions for UMF scale & taste profile
- Modular React components for maintainability

---

## **Tech Stack**

- **Frontend:** React, React Router
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Bundler:** Vite / Create React App (choose one)

---

## **Project Structure**
```
src/
├── assets/ # Images and icons
├── components/ # Reusable UI components
│ ├── Navbar.jsx
│ ├── GalleryViewer.jsx
│ ├── RightSection.jsx
│ ├── VariantSelector.jsx
│ ├── PaymentOptions.jsx
│ ├── CartAdd.jsx
│ ├── RewardPoints.jsx
│ ├── ProductInfo
│ ├── BeautyBundleCard.jsx
│ ├── DeliveryAfterpayInfo.jsx
│ └── UMFSelector.jsx

├── pages/
│ ├── Shop.jsx
│ └── Cart.jsx
├── redux/
│ ├── Store.js
│ └── cartSlice.js
└── App.jsx
```
---

## **Installation & Setup**

1. **Clone the repository:**

```bash
git clone <repository-url>
cd nz-honey-co
```

2. **Install dependencies:**
   npm install

3. **Run the app:**
   npm start

4. Open http://localhost:5173 in your browser.

## **Usage**

Navigate to /shop to view the product detail page.

Select product variants, add to cart, and view cart items.

Clear cart using the "Clear Cart" button.

Explore responsive layouts on mobile, tablet, and desktop.

## **Future Improvements**

Enhanced accessibility (keyboard navigation, ARIA attributes)

Lazy loading images/videos for performance optimization

Integration with backend/CMS for dynamic product data

Advanced cart features (wishlist, coupons, shipping calculations)

User personalization and recommendations

Animations and micro-interactions for better UX

Testing: unit, integration, and end-to-end tests

Internationalization (multi-language & currency support)

## **License**

This project is for educational purposes and does not have a commercial license.
