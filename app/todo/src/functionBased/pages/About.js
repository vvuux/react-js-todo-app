import React from "react";
import {useLocation, Link} from "react-router-dom";

const About = props => {
    const {pathname} = useLocation()

    return (
        <div>
            <ul>
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