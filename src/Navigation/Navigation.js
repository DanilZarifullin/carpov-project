import React from "react"
import { categoriesNames } from "../Utils.js"
import "./Navigation.css"
import logo from "../../images/logo.svg"
export const Navigation = ({className, cb, currentCategory}) => {
    return (
        <nav className={`navigation grid ${className}`}>
            <a href="logo" className="navigation__logo">
                <img src={logo} className="navigation__logo image" alt="image-logo"/></a>
            <ul className="navigation__list">
                {["index", "fashion", "tech", "politics", "sport"].map((item) => {
                    return (
                        <li key={item} className="navigation__item"><a href="#" onClick={cb} data-href={item} className={`navigation__link ${currentCategory === item ? "navigation__link--active" : ""}`}>{categoriesNames[item]}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}