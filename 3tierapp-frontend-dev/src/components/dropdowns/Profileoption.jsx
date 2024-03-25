import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { Flexcenter } from "../../style/Navstyle";
import "../../style/profile.css";
import { Roundbox } from "../../style/Sidestyle";
import { Avatar } from "@mui/material";
// import axios from "../../axios.js";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { connect } from "react-redux";
// import * as actionTypes from "../../store/actions";
// import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

function Example({ direction, setUpdateUserData, ...args }) {
  const navigate = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
    setIcon(!icon);
  };

  // const handleLogout = async () => {
  //   try {
  //     const resp = await axios.get("/admin/logout");
  //     toast.success(resp?.data.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //     });
  //     navigate.push("/");
  //   } catch (error) {
  //     toast.error("Something went wrong..!", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //     });
  //   }
  // };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUpdateUserData("");
        localStorage.removeItem("signData");
        localStorage.removeItem("access_token");
        navigate.push("/");
        toast.success("Logged Out Succesfully..", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        navigate.go("0");
      }
    });
    // if (window.confirm("Are you sure you want to Logout?")) {
    //   setUpdateUserData("");
    //   localStorage.removeItem("signData");
    //   localStorage.removeItem("access_token");
    //   navigate.push("/");
    //   toast.success("Logged Out Succesfully..", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //   });
    //   navigate.go("0");
    // } else {
    // }
  };

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle style={{ background: "white", border: "none" }}>
          <Flexcenter style={{ gap: "5px", color: "black" }}>
            <Avatar />
            Admin
            {icon ? (
              <i className="ph-fill ph-caret-up"></i>
            ) : (
              <i className="ph-fill ph-caret-down"></i>
            )}
          </Flexcenter>
        </DropdownToggle>
        <DropdownMenu {...args} dark={false} className="custom-menu-profile">
          <DropdownItem className="custom-dropItem-profile" header text>
            <h5>Profile</h5>
          </DropdownItem>
          {/* <DropdownItem className="custom-dropItem-profile">
            <Flexcenter>
              <Roundbox style={{ background: "#f1f5f7" }}>
                <i className="ph-bold ph-gear" style={{ color: "#191c24" }}></i>
              </Roundbox>
              <span style={{ paddingLeft: "20px" }}>Settings</span>
            </Flexcenter>
          </DropdownItem> */}
          <DropdownItem
            className="custom-dropItem-profile"
            onClick={handleLogout}
          >
            <Flexcenter>
              <Roundbox style={{ background: "#f1f5f7" }}>
                <i
                  className="ph-bold ph-sign-out"
                  style={{ color: "#191c24" }}
                ></i>
              </Roundbox>
              <span style={{ paddingLeft: "20px" }}>LogOut</span>
            </Flexcenter>
          </DropdownItem>
          {/* <DropdownItem className="custom-dropItem-profile">
            Advanced settings
          </DropdownItem> */}
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUpdateUserData: (val) => {
//       dispatch({
//         type: actionTypes.USER_DATA,
//         userData: val,
//       });
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(Example));

export default Example;
