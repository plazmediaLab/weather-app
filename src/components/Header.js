import React from 'react';



const Header = ( {titulo} ) => {
  return (
    <div>
      <nav className="nav-bar bg-primaty">
        <ul className="navbar-component">
          <li className="logo" title="The name of the website">
            <a href="#!"><i className="a-filter_drama"></i> <span>{titulo}</span></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header