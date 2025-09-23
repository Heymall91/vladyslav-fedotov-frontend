import { useEffect, useState, useRef } from "react";
import NavMenu from "./NavMenu";
// svg
import logo from '/src/assets/logo.svg'
import options from '/src/utils/Options.jsx'

export default function Header(){
    const [opened, setOpened] = useState(false);
    const [flag, setFlag] = useState(options[0]);

    return(
        <header>
            <div className="wrapper">
                <div className="block">
                    <div className="header__logo">
                        <img src={logo} alt="Main icon"/>
                    </div>
                    <div className="menu_normal">
                        <NavMenu flag={flag} setFlag={setFlag}/>
                    </div>
                    <div className="menu__burger">
                        <div className="menu__burger__blocks" onClick={() => setOpened(true)}>
                            <div className="menu__burger__item"></div>
                            <div className="menu__burger__item"></div>
                            <div className="menu__burger__item"></div>
                        </div>
                        {opened &&
                        <div className="menu__burger__nav__menu">
                            <div className="menu__burger__close" onClick={() => setOpened(false)}>
                                <div className="menu__burger__item one"></div>
                                <div className="menu__burger__item two"></div>
                            </div>
                            <NavMenu flag={flag} setFlag={setFlag} setClicked={setOpened}/>
                        </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}