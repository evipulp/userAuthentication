import React, { useState, useEffect } from "react";
import "./MenuBar.css";
import { auth } from "../firebase";
import { useStateValue } from "../provider/StateProvider";
import { Redirect, withRouter } from "react-router-dom";

const MenuBar = () => {
  const [state] = useStateValue();
  const [userName, setUserName] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { user } = state;
  const logout = () => {
    if (user) {
      auth.signOut();
      setRedirect(true);
    }
  };

  useEffect(() => {
    let user = auth.currentUser;
    setUserName(user?.displayName);
  }, [state]);

  return (
    <div>
      <nav className="menu-bar">
        <button className="d-button">Dashboard</button>
        <div style={{ marginLeft: 5, color: "white" }}>Congratulations!!</div>
        <div style={{ marginLeft: 10, color: "white" }}>
          {userName ? userName : ""}
        </div>
        {redirect && <Redirect to="/" />}
        <button onClick={logout} className="l-button">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default withRouter(MenuBar);
