import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Ron Gould</h1>
      <img src={coverImage} alt="Beach Scene"></img>
      {props.children}
    </header>
  );
}

export default Header;
