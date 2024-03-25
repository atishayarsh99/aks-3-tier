
import { useState } from "react";
import { Flexcenter, Leftbox, Navbox, Rightbox } from "../style/Navstyle";
import Profileoption from "./dropdowns/Profileoption";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const youClickedMe = () => {
    const element1 = document.querySelector("#Fullbar");
    const element2 = document.querySelector("#Halfbar");
    if (!sidebar) {
      setSidebar(true);
      element2.style.display = "block";
      element1.style.display = "none";
    } else {
      setSidebar(false);
      element2.style.display = "none";
      element1.style.display = "block";
    }
  };

  return (
    <>
      <Navbox>
        <Leftbox>
          <div onClick={youClickedMe} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#191c24"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
        </Leftbox>
        <Rightbox>
          <ul>
            <li>
              <Flexcenter>
                <Profileoption />
              </Flexcenter>
            </li>
          </ul>
        </Rightbox>
      </Navbox>

      {/* Dropdown for notification icon */}
    </>
  );
};

export default Navbar;
