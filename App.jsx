import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <div className="app-container">
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
    </Provider>
  );
}

export default App;
