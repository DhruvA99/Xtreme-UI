import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationIcons from "../NotificationIcons/NotificationIcons";
import classes from "./Navigation.module.css";
import logo from "../../assets/images/logo_transparent.png";

const Navigation = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const navbarHandler = () => {
    setsidebarOpen((sidebarOpen) => !sidebarOpen);
  };
  return (
    <div className={classes.navigation_main}>
      <div className={classes.navigation_left_side}>
        <div
          className={classes.navigation_Hamburger_Icon}
          onClick={navbarHandler}
        >
          <div className={classes.hamburgerItem}></div>
          <div className={classes.hamburgerItem}></div>
          <div className={classes.hamburgerItem}></div>
        </div>
        <div>
          <img className={classes.navigation_logo} src={logo} alt="img" />
        </div>
      </div>
      <div
        className={`${classes.navigation_sidebar} ${
          sidebarOpen ? classes.navigaton_sidebar_open : null
        }`}
      >
        <span
          className={classes.navigation_sidebar_closeBtn}
          onClick={navbarHandler}
        >
          &times;
        </span>
        <div className={classes.sideBarExtra}>
          <NavLink
            className={classes.navlink}
            activeClassName={classes.selectedExtra}
            to="/"
            onClick={navbarHandler}
          >
            Home
          </NavLink>
          <NavLink
            className={classes.navlink}
            activeClassName={classes.selectedExtra}
            to="/documentation"
            onClick={navbarHandler}
          >
            Documentation
          </NavLink>
        </div>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/alert"
          onClick={navbarHandler}
        >
          Alert
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/avatars"
          onClick={navbarHandler}
        >
          Avatars
        </NavLink>

        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/button"
          onClick={navbarHandler}
        >
          button
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/card"
          onClick={navbarHandler}
        >
          card
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/navbar"
          onClick={navbarHandler}
        >
          navbar
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/spinner"
          onClick={navbarHandler}
        >
          spinner
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/tooltip"
          onClick={navbarHandler}
        >
          tooltip
        </NavLink>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.selected}
          to="/notificationicons"
          onClick={navbarHandler}
        >
          notification Icons
        </NavLink>
      </div>
      <div className={classes.navigation_content}>
        <NavLink
          className={classes.navlinkExtra}
          activeClassName={classes.selectedExtra}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={classes.navlinkExtra}
          activeClassName={classes.selectedExtra}
          to="/documentation"
        >
          Documentation
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
