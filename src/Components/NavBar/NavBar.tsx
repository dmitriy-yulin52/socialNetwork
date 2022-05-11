import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.sass";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Profile
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Message
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Users
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            News
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Music
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Setting
          </Typography>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/friends" activeClassName={style.activeLink}>
          <Typography variant={"h5"} component={"span"}>
            Friends
          </Typography>
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
