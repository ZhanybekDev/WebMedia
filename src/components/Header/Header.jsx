import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return (
        <header className={s.header}>
            <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={`/login`} className={s.loginText}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
