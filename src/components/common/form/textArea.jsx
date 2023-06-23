import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, name, value, onChange, row }) => {
  const handleChange = ({ target }) => {
    console.log("TextArea", target);
    onChange({ name: [target.name], value: target.value });
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        rows={row}
        className="w-100 mx-auto"
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

TextArea.defaultProps = { type: "text" };

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  row: PropTypes.number,
  onChange: PropTypes.func,
};

export default TextArea;
