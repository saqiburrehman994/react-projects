const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat
          cumque, esse dolorum ratione vel quos distinctio nam, repellendus ad
          at, sequi quo id vero. Sit iste quae pariatur similique!
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="btn-secondary">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./images/facebook.png" width="30px"></img>
            <img src="./images/facebook.png" width="30px"></img>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe.png"></img>
      </div>
    </main>
  );
};
export default Hero;
