import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
    const { isSideBarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside
            className={`${
                isSideBarOpen ? "sidebar show-sidebar" : "sidebar "
            } `}
        >
            <div className="sidebar-header">
                <img src={logo} alt="codding addict" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((el) => {
                    const { id, url, icon, text } = el;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-icons">
                {social.map((el) => {
                    const { id, url, icon } = el;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
