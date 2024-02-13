import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { TbEditCircle } from "react-icons/tb";
import { useState } from "react";

const ItemForm = ({ data }) => {
  const { id, title } = data;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={`item-wrap ${isChecked ? "checked" : ""}`}>
      <div className="item-wrap__checkboxItem">
        <input
          type="checkbox"
          className="item-wrap__checkboxItem--checkbox"
          id={id}
          onChange={handleChange}
        />
        <label htmlFor={id} className="item-wrap__checkboxItem--label">
          {isChecked ? (
            <IoCheckbox size={20} />
          ) : (
            <MdCheckBoxOutlineBlank size={20} />
          )}
          {title}
        </label>
      </div>

      <div className="item-wrap__buttonItem">
        <button type="button" className="item-wrap__formItem--iconBtn">
          <TbEditCircle size={22} />
        </button>
        <button type="button" className="item-wrap__formItem--iconBtn">
          <IoMdCloseCircleOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default ItemForm;
