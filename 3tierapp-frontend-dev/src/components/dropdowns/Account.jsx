import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { Flexcenter } from "../../style/Navstyle";
import "../../style/account.css";
import { Roundbox } from "../../style/Sidestyle";

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}  >
        <DropdownToggle style={{ background: "#191c24",border:"none"}} >
          <i
            className="ph-fill ph-dots-three-outline-vertical"
            style={{ color: "#617193"}}
            
          ></i>
        </DropdownToggle>
        <DropdownMenu {...args} dark={true} className="custom-menu-account" >
          
          <DropdownItem className="custom-dropItem-account" >
            <Flexcenter>
              <Roundbox style={{ background: "#0d0d0d" }}>
                
                <i className="ph-fill ph-gear-six" style={{color:"#00d254"}}></i>
              </Roundbox>
              <span style={{ paddingLeft: "20px" }}>Account settings</span>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-account">
            <Flexcenter>
              <Roundbox style={{ background: "#0d0d0d" }}>
                
                <i className="ph-fill ph-password" style={{color:"#fc424a"}}></i>
              </Roundbox>
              <span style={{ paddingLeft: "20px" }}>Change Password</span>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-account">
            <Flexcenter>
              <Roundbox style={{ background: "#0d0d0d" }}>
                
              <i className="ph-fill ph-list-dashes" style={{color:"#02b850"}}></i>
              </Roundbox>
              <span style={{ paddingLeft: "20px" }}>To-do list</span>
            </Flexcenter>
          </DropdownItem>
         
          
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;
