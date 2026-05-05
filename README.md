# 🌿 Paradise Nursery

A beautiful, interactive e-commerce web application built with React for plant lovers. Paradise Nursery allows users to explore a variety of plants, learn about the nursery, and seamlessly add items to their shopping cart.

## 🚀 Features

* **Interactive Landing Page:** A welcoming home page with a background image, company introduction, and a "Get Started" button to navigate to the shop.
* **Product Listing:** A clean grid layout displaying various plants, complete with images, names, and prices.
* **State Management:** Utilizes Redux Toolkit to effectively manage the user's shopping cart state across the entire application.
* **Shopping Cart Functionality:** Users can add items to their cart, with buttons dynamically updating to prevent duplicate additions.
* **Responsive Design:** Styled with custom CSS to ensure a clean, modern, and user-friendly experience.

## 🛠️ Technologies Used

* **Frontend Framework:** React.js
* **Build Tool:** Vite
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Styling:** Pure CSS

## 📁 Project Structure

```text
e-plantShopping/
├── public/
├── src/
│   ├── AboutUs.jsx       # The company information section
│   ├── App.jsx           # Main traffic controller (conditional rendering)
│   ├── App.css           # Global styles and layout
│   ├── CartItem.jsx      # Individual item display for the cart
│   ├── CartSlice.jsx     # Redux slice for managing cart data
│   ├── ProductList.jsx   # Grid displaying all available plants
│   ├── main.jsx          # React entry point
│   └── store.js          # Redux store configuration
├── index.html
├── package.json
└── vite.config.js
