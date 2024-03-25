/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { dictionaryList } from "./language/index";
const defaultLanguage = "en";

const messages = dictionaryList[defaultLanguage].errors;

// global regex
const noHtmlRegex = /<\/?[^>]+(>|$)/g;
const onlyAlphbetRegex = /^[a-zA-Z ]*$/;
const numberOnly = /^\d+$/;
var phoneRegex = /^[0-9]+$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const unitRegex = /^[0-9]+\.?[0-9]*$/;

const checkEmail = (value) => {
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return true;
  } else if (
    value.includes('"') ||
    value.includes("'") ||
    value.includes(",") ||
    value.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
};

export const loginValidator = (values) => {
  let errors = {};

  // if (!values.mobile_number) {
  //     errors.mobile_number = "Enter mobile number";
  // } else if (!phoneRegex.test(values.mobile_number)) {
  //     errors.mobile_number = messages.phone;
  // } else if (values.mobile_number.length < 4) {
  //     errors.mobile_number = messages.phone;
  // }

  if (!values.password) {
    errors.password = "Enter Password";
  }

  if (!values.email) {
    errors.email = "Enter Email ID";
  } else if (checkEmail(values.email)) {
    errors.email = messages.email;
  }

  return errors;
};
export const passwordProfileValidator = (values) => {
  let errors = {};

  if (!values.oldPassword) {
    errors.oldPassword = "Enter Current Password";
  }
  if (!values.password) {
    errors.password = "Enter New Password";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Enter Confirm Password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }
  return errors;
};
