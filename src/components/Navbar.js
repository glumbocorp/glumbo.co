import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import logo from "../image/glumbo-transparent.png";

const navbar = () => {
    console.log(logo);
    return (
        <div>
            <div className={"navbar"}>
                <div>
                    <Link className={"navlink"} id={"glumbocoin"} to="/">
                        GlumboCoin
                    </Link>
                </div>
                <div>
                    <Link className={"navlink"} id={"kca"} to="/">
                        You WHAT????
                    </Link>
                </div>                    
                <div>
                    <Link className={"navlink"} id={"live"} to="/">
                        Glumbo Live
                    </Link>
                </div>    
                <div>
                    <Link className={"navlink"} id={"chaos"} to="/">
                        Chaos
                    </Link>
                </div>
            </div>
            <image src={require("../image/logo.png")}></image>
        </div>
    );
};

export default navbar;