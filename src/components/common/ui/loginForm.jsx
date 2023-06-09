import React, { useEffect, useState } from "react";
import TextField from "../form/textField";
import { validator } from "../../../utils/validator";
import CheckBoxField from "../form/checkBoxField";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен не корректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязательный для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру",
      },
      min: {
        message: "Пароль должен быть не менее 8 символов",
        value: 8,
      },
    },
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={"Email"}
        name={"email"}
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label={"Password"}
        type={"password"}
        name={"password"}
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField
        onChange={handleChange}
        name={"stayOn"}
        value={data.stayOn}
      >
        Оставаться в системе{" "}
      </CheckBoxField>
      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
