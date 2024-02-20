import { useState } from "react";

const InputForm = ({ btnText, onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-wrap">
      <input
        type="text"
        className="input-wrap__input"
        value={value}
        onChange={handleChange}
        placeholder="Write a new todo"
      />
      <button
        type="submit"
        className={`input-wrap__btn ${btnText === "update" ? "update" : ""}`}
      >
        <span className="input-wrap__btn-text">{btnText}</span>
      </button>
    </form>
  );
};

export default InputForm;
