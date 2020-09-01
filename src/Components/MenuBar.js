import React, { useState, useEffect } from "react";
import "./MenuBar.css";
import { auth } from "../firebase";
import { useStateValue } from "../provider/StateProvider";
import { useHistory, withRouter } from "react-router-dom";

const MenuBar = () => {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const { user } = state;
  const logout = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      history.push("/");
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
        <button onClick={logout} className="l-button">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default withRouter(MenuBar);
