import React from "react";
import Logo from "../../src/assets/logo.svg";

const Navbar = () => {
    return <div>
        {/*UPPER NAVBAR*/}
        <div>
            <div>
              <div>
                <a href="#">
                   <img src={Logo} alt="Logo" /> 
                </a>
              </div> 
              {/*search bar and order button*/}
              <div>
                <div className="group">
                    <input 
                    type="text" 
                    placeholder="search"
                    className="w-[200px] sm:w-[200px]
                    group-hover:w-[300px] transition-all
                    duration-300 rounded-full border
                    border-gray-300 px-2 py-1
                    focus:outline-none focus:border-1
                    focus:border-primary " />
                </div>
              </div>
            </div>
        </div>
        {/*LOWER Navbar*/}
        <div></div>
    </div>;
};

export default Navbar;