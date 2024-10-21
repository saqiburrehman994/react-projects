const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="/images/nike_logo.png"
          width="100px"
          alt="logo"
          height="50px"
        />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default Navigation;
