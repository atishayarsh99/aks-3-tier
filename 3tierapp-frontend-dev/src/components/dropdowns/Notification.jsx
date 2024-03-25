import  { useState } from 'react';
import { Badge,Flexcenter } from '../../style/Navstyle';
import { Roundbox} from '../../style/Sidestyle';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import "../../style/notification.css"

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
        <DropdownToggle style={{margin:"0",padding:"0",background:"#191c24",border:"none"}}>
        
        <Badge />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z"></path>
              </svg>
        </DropdownToggle>
        <DropdownMenu {...args} dark={true} className='custom-menu-notification'>
          <DropdownItem header className='custom-dropItem-notification'><h5>Notification</h5></DropdownItem>
          <DropdownItem className='custom-dropItem-notification'>
          <Flexcenter>
            <Roundbox style={{background:"#0d0d0d"}}>
            <i className="ph-fill ph-calendar" style={{color:"#fc424a"}}></i>
            </Roundbox>
            <span style={{paddingLeft:"20px"}}>Event Today</span>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem  className='custom-dropItem-notification'>
          <Flexcenter>
            <Roundbox style={{background:"#0d0d0d"}}>
            <i className="ph-fill ph-gear-six" style={{color:"#00d153"}}></i>
            </Roundbox>
              <span style={{paddingLeft:"20px"}}>settings</span>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className='custom-dropItem-notification'>
          <Flexcenter>
            <Roundbox style={{background:"#0d0d0d"}}>
            <i className="ph-fill ph-link" style={{color:"#df750b"}}></i>
            </Roundbox>
              <span style={{paddingLeft:"20px"}}>Launch Admin</span>
            </Flexcenter>
          </DropdownItem>
          <DropdownItem className='custom-dropItem-notification'>
            <Flexcenter style={{justifyContent:"center"}}>See all Notification</Flexcenter>
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