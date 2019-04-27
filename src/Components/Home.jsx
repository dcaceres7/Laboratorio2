import React from 'react';
import {Link} from 'react-router-dom' ;


function Home() {
  return (
    <div className="Home">
      <header>
        <label>Home</label>
      </header>
      <ul>
      <li><Link to="/user">User</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Home;
