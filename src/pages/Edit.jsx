import Header from "../components/Header";
import InputForm from "../components/InputForm";
import ItemForm from "../components/ItemForm";
import { ItemList } from "../datas/common";

const Edit = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-content">
          {/* top */}
          <div className="wrapper-content__top">
            {/* header text */}
            <Header text={"What’s the Plan for Today?"} />
            <InputForm btnText={"update"} />
          </div>

          {/* section */}
          <div className="wrapper-content__section">
            <div className="wrapper-content__section--itembox">
              {ItemList.map((item) => (
                <ItemForm key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
