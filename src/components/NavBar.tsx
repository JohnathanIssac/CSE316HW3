import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(true);

  const onClickHandle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className={`navToggle ${show ? '' : 'navTogglex'}`} onClick={onClickHandle} id='b'></button>
      <nav className={`MenuBar ${show ? '' : 'MenuBarHidden'}`}>
        <ul className='MenuBarUl' data-visible={show}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li className='lists'>00 Home</li>
          </Link>
          <Link to='/instructions' style={{ textDecoration: 'none' }}>
            <li className='lists'>01 Instruction</li>
          </Link>
          <Link to='/previouscourses' style={{ textDecoration: 'none' }}>
            <li className='lists'>02 Enter the Previous Courses</li>
          </Link>
          <Link to='/selectcourses' style={{ textDecoration: 'none' }}>
            <li className='lists'>03 Select the Courses</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
