import { ErrorMessage, Form, Formik } from "formik";
import Input from "../components/Input";
import * as LP from "../style/Loginstyle";
import Texterror from "../components/Texterror";
import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import axios from "../axios.js";
import { toast } from "react-toastify";
// import { connect } from "react-redux";
// import * as actionTypes from "../store/actions";
// import { withRouter } from "react-router-dom";
import actLogo from "../assets/atc_logo.png";
import axios from "axios";

const InputForm = () => {
  const navigate = useHistory();
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);

    handleLogin(values);

  };

  const handleLogin = async (val) => {
    const obj = {
      firstName: val.firstName,
      mobileNumber: val.mobileNumber,
    };
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/admin/login`,
        obj
      );
      toast.success(resp?.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      navigate.push("/");
    } catch (error) {
      toast.error("Something went wrong..!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      console.log(error);
    }
  };

  return (
    <>
      <LP.Wrapper>
        <LP.Container>
          <LP.Formbox>
            <LP.Formhead>Input</LP.Formhead>
            <LP.LoginText>Fill the List with this form</LP.LoginText>
            <Formik
              enableReinitialize
              validateOnChange
              initialValues={{
                firstName: "",
                mobileNumber: "",
              }}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form style={{ width: "100%" }}>
                  <LP.Formbody>
                    <div>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="FirstName"
                        {...formik.getFieldProps("firstName")}
                      />
                      <ErrorMessage name="firstName" component={Texterror} />
                    </div>
                    <div>
                      <Input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        {...formik.getFieldProps("mobileNumber")}
                      />
                      <ErrorMessage name="mobileNumber" component={Texterror} />
                    </div>

                    <LP.Submit
                      disabled={!formik.isValid || formik.isSubmitting}
                    />
                  </LP.Formbody>
                </Form>
              )}
            </Formik>
          </LP.Formbox>
        </LP.Container>
      </LP.Wrapper>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.userData,
//   };
// };

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

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

export default InputForm;
