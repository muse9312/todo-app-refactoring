import Header from "../components/Header";
import InputForm from "../components/InputForm";
import List from "../components/List";
import ListContainer from "../components/ItemContainer";
import { itemList } from "../datas/common";

const Edit = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-content">
          {/* top */}
          <div className="wrapper-content__top">
            {/* header text */}
            <Header text={"후츠릿 짱"} />
            <InputForm btnText={"update"} />
          </div>

          {/* section */}
          <div className="wrapper-content__section">
            <List>
              {itemList.map((item) => (
                <ListContainer key={item.id} data={item} />
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
