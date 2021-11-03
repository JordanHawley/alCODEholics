import React from "react";

import { Button } from "reactstrap";

import { Link, useHistory } from "react-router-dom";

import {logoutUserAccount} from '../api/index';

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({user, setUser}) => {
  const history = useHistory()
  return (

    <div className="Nav"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      {user 
      ? <h3>Hello {user.user.username}! Time to get Schwifty!</h3>
      : ''
      }
      
      <Link to="/alcohol">
        <Button className="navButton">All Alcohols</Button>
      </Link>
      {user
      ? <Button className="navButton" onClick={() => {
        logoutUserAccount();
        setUser(null);
        history.push('/registerUserAccount')
      }
      }>Log Out</Button>
      : <Link to="/registerUserAccount">
        <Button className="navButton">Login/Register User</Button>
      </Link>
      }
      <Link to="/cart">
        <Button className="navButton">Cart</Button>
      </Link>
      {user && user.user.isAdmin ?
      <Link to="/users">
        <Button className="navButton">User List</Button>
      </Link> : "" }
    </div>
  );
};

export default Navbar;
