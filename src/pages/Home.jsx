import { useState } from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import ItemForm from "../components/ItemForm";
import { ItemList } from "../datas/common";

// ? 페이지 전체 스크롤 이슈....
const Home = () => {
  const [newList, setNewList] = useState(ItemList);

  // list 삭제
  const handleDelete = (id) => {
    setNewList(newList.filter((item) => item.id !== id));
  };

  // list 추가
  const handleAdd = (text) => {
    const newltem = {
      id: Date.now(),
      text: text,
    };
    setNewList([newltem, ...newList]);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-content">
          {/* top */}
          <div className="wrapper-content__top">
            {/* header text */}
            <Header text={"What’s the Plan for Today?"} />
            <InputForm btnText={"Add"} onAdd={(text) => handleAdd(text)} />
          </div>

          {/* section */}
          <div className="wrapper-content__section">
            <div className="wrapper-content__section--itembox">
              {newList.map((item) => (
                <ItemForm key={item.id} data={item} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
