import React from "react";
import {useLocation, Link} from "react-router-dom";

const About = () => {
    const {pathname} = useLocation()

    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to={`${pathname}/app`}>App</Link>
                </li>
                <li>
                    <Link to={`${pathname}/author`}>Author</Link>
                </li>
            </ul>
        </div>
    )
}

export default About