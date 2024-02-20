import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { TbEditCircle } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemContainer = ({ data, onDelete }) => {
  const { id, text } = data;
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigate();

  // edit page 이동
  const handleNavigate = () => {
    navigation("/edit");
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <li className={`item-wrap ${isChecked ? "checked" : ""}`}>
      <div className="item-wrap__checkbox_item">
        <input
          type="checkbox"
          className="item-wrap__checkbox_item-checkbox"
          id={id}
          onChange={handleChange}
        />
        <label htmlFor={id} className="item-wrap__checkbox_item-label">
          {isChecked ? (
            <IoCheckbox size={20} />
          ) : (
            <MdCheckBoxOutlineBlank size={20} />
          )}
          {text}
        </label>
      </div>

      <div className="item-wrap__button_item">
        <button
          type="button"
          className="item-wrap__button_item-button"
          onClick={handleNavigate}
        >
          <TbEditCircle size={22} />
        </button>
        <button
          type="button"
          className="item-wrap__button_item-button"
          onClick={() => onDelete(id)}
        >
          <IoMdCloseCircleOutline size={22} />
        </button>
      </div>
    </li>
  );
};

export default ItemContainer;
