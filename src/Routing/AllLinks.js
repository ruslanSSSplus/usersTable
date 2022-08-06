import React from "react";
import {Link} from "react-router-dom";
import classes from "../App.module.css";


export const AllLinks = () => {

    return (<div className={classes.menu}>
        <span className={classes.elem1} >
        <Link to="/Main">Пользователи</Link>
        </span>
        <span className={classes.elem2} >
            <Link to='/SmthElse'>Что-то еще</Link>
        </span>
    </div>);
}
