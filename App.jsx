import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // This state variable keeps track of whether to show the landing page or the product list
  const [showProductList, setShowProductList] = useState(false);

  // This function runs when the "Get Started" button is clicked
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Conditional rendering: If showProductList is true, show the products. Otherwise, show the landing page. */}
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>

            <div className="aboutus_container">
              <AboutUs />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
