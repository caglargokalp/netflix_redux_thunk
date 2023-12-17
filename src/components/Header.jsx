import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <header className="P-4">
      <Link to={"/"}>
        <img  style={{ maxWidth: "150px" }} src="/ntflix.png" alt="" />
      </Link>
    </header>
  );
};

export default Header;
