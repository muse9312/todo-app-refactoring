import { useState } from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import ItemContainer from "../components/ItemContainer";
import { ItemList } from "../datas/common";
import List from "../components/List";

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
    <main className="wrapper">
      <div className="wrapper-content">
        {/* top */}
        <div className="wrapper-content__top">
          {/* header text */}
          <Header text={"What’s the Plan for Today?"} />
          <InputForm btnText={"Add"} onAdd={(text) => handleAdd(text)} />
        </div>

        {/* section */}
        <article className="wrapper-content__section">
          <List>
            {newList.map((item) => (
              <ItemContainer
                key={item.id}
                data={item}
                onDelete={handleDelete}
              />
            ))}
          </List>
        </article>
      </div>
    </main>
  );
};

export default Home;
