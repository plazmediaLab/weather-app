import React, { Fragment } from 'react';



const Header = ( {titulo} ) => {
  return (
    <Fragment>
      <nav className="nav-bar bg-primary">
        <ul className="navbar-components">
          <li className="logo" title="The name of the website">
            <a href="#!">
              <i className="a-filter_drama"></i>&nbsp;
              <span>{titulo}</span>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header