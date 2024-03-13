import { useState, useEffect } from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import ItemContainer from "../components/ItemContainer";
import List from "../components/List";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  // list 삭제
  const handleDelete = (id) => {
    // const filterList = todoList.filter((item) => item.id !== id)
    // setTodoList(filterList);
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  // list 추가
  const handleAdd = (text) => {
    // TODO: 중복체크
    const newltem = {
      id: Date.now(),
      isComplete: false,
      text,
    };
    setTodoList([...todoList, newltem]);
  };

  useEffect(() => {
    console.log("todoList", todoList);
  }, [todoList]);

  return (
    <main className="wrapper">
      <div className="wrapper-content">
        {/* top */}
        <div className="wrapper-content__top">
          {/* header text */}
          <Header text={"What’s the Plan for Today?"} />
          <InputForm btnText={"Add"} onAdd={handleAdd} />
        </div>
        {/* section */}
        <article className="wrapper-content__section">
          <List>
            {todoList.map((item) => (
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
