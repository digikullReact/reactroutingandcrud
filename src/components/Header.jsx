import * as React from 'react';
import { Link } from "react-router-dom";


const pages = ['Add', 'Show'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
 

  return (
      <ul>
           <li>
        
        <Link to="/add">Create</Link> |{" "}

        
    </li>

    <li>
        
        <Link to="/show">Show</Link> |{" "}

        
    </li>

      </ul>
   
  );
};
export default Header;
