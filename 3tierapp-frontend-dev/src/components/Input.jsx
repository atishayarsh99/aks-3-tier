import { useState } from "react";

import styled from "styled-components";

const InputField = styled.input.attrs({ autoComplete: "none" })`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: black;
  padding: 10px 12px;
`;

const InputBorder = styled.div`
  border: 1px solid #bbbbbb;
  padding: 5px;
  background: white;

  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  color: black;
`;

export default function Input(prop) {
  const { error, type } = prop;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputBorder>
        <InputField
          {...prop}
          type={type ? (showPassword ? "text" : type) : "text"}
        />
        {type === "password" ? (
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`fa ${!showPassword ? "ph ph-eye-slash" : "ph ph-eye"}`}
          ></i>
        ) : (
          ""
        )}
      </InputBorder>
      {error ? (
        <p
          style={{
            paddingTop: 2,
            fontSize: 9,
            color: "red",
          }}
        >
          {error}
        </p>
      ) : null}
    </>
  );
}
