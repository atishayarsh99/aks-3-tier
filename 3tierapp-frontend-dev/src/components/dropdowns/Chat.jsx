import { useState } from "react";
import { Badge, Flexcenter } from "../../style/Navstyle";
import { Roundbox } from "../../style/Sidestyle";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import "../../style/chat.css";

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle
          style={{
            margin: "0",
            padding: "0",
            background: "#191c24",
            border: "none",
          }}
        >
          <Badge />
          <i className="ph-fill ph-chat"></i>
        </DropdownToggle>
        <DropdownMenu {...args} dark={true} className="custom-menu-chat">
          <DropdownItem header className="custom-dropItem-chat">
            <h5>Messages</h5>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-chat">
            <Flexcenter>
              <Roundbox style={{ background: "#0d0d0d",color:"white"  }}>
                <span>M</span>
              </Roundbox>
              <div className="message">
                <div className="value">Mark send you a message</div>
                <div className="subvalue">4 minutes ago</div>
              </div>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-chat">
            <Flexcenter>
              <Roundbox  >
                <span>C</span>
              </Roundbox>
              <div className="message">
                <div className="value">Creg send you a message</div>
                <div className="subvalue">40 minutes ago</div>
              </div>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-chat">
            <Flexcenter>
              <Roundbox style={{ background: "#0d0d0d" }}>
                <span>P</span>
              </Roundbox>
              <div className="message">
                <div className="value">Profile picture updates</div>
                <div className="subvalue">1 hour ago</div>
              </div>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className="custom-dropItem-chat">
            <Flexcenter style={{ justifyContent: "center",color:"white" }}>
              4 new Messages
            </Flexcenter>
          </DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;
