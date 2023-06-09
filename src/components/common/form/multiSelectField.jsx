/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const multiSelectField = ({ options, name, onChange, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  const handleChange = (value) => {
    onChange({ name, value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        defaultValue={defaultValue}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
        closeMenuOnSelect={false}
      />
    </div>
  );
};

multiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.array,
};

export default multiSelectField;
