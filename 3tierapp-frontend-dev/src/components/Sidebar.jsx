// import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import {
  Contentbox,
  Cross,
  Fullcontentbox,
  Fullcontentboxhover,
  Fullsidebox,
  Iconbox,
  Roundbox,
  Sidebox,
  Value,
} from "../style/Sidestyle";
import Account from "./dropdowns/Account";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const sidebarOff = () => {
    const element = document.querySelector("#Fullbar");
    element.style.display = "none";
  };
  // const navigate = useNavigate();
  return (
    <>
      <Sidebox id="Halfbar" style={{ display: "none" }}>
        <Contentbox style={{ fontSize: "2rem", color: "white" }}>C</Contentbox>
        <Contentbox>
          <Avatar />
        </Contentbox>
        <Contentbox style={{ flexDirection: "column", height: "auto" }}>
          {/* <Tooltip
            title="Dashboard"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                // navigate("/home/dashboard");
              }}
            >
              <Roundbox>
                <i className="ph ph-gauge" style={{ color: "#8f5fe8" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="About"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                // navigate("/home/about");
              }}
            >
              <Roundbox>
                <i className="ph ph-info" style={{ color: "#faa50b" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Contact Us"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox>
              <Roundbox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0bc557"
                  viewBox="0 0 256 256"
                >
                  <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Login"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                // navigate("/home/login");
              }}
            >
              <Roundbox>
                <i className="ph ph-sign-in" style={{ color: "#f34144" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip> */}
        </Contentbox>
      </Sidebox>
      <Fullsidebox id="Fullbar">
        <Fullcontentbox
          style={{
            fontSize: "1.5rem",
            color: "white",
            justifyContent: "space-between",
            paddingLeft: "1rem",
          }}
        >
          ADMIN
          <Cross onClick={sidebarOff}>
            <i className="ph ph-x-circle" style={{ color: "#00d25b" }}></i>
          </Cross>
        </Fullcontentbox>
        <Fullcontentbox
          style={{
            flexDirection: "row",
            color: "white",
            justifyContent: "flex-start",
            padding: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "30%",
              justifyContent: "center",
            }}
          >
            <Avatar />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "50%",
            }}
          >
            <h6>Henry Klein</h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "20%",
              justifyContent: "center",
            }}
          >
            <Account />
          </div>
        </Fullcontentbox>
        <Fullcontentbox>
          <Value>Navigation</Value>
        </Fullcontentbox>

        <Fullcontentboxhover to="/form">
          <Roundbox>
            <i className="ph ph-address-book" style={{ color: "#faa50b" }}></i>
          </Roundbox>
          <Value>Form</Value>
        </Fullcontentboxhover>
        <Fullcontentboxhover to="/">
          <Roundbox>
            <i className="ph ph-laptop" style={{ color: "#faa50b" }}></i>
          </Roundbox>
          <Value>List</Value>
        </Fullcontentboxhover>
      </Fullsidebox>
    </>
  );
};

export default Sidebar;
