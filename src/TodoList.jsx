import "./TodoList.css";
import { useState } from "react";
import TodoList2 from "./TodoList2";


const TodoList = () => {

  const [InputList, setInputList] = useState();
  const [Items, setItems] = useState([]);


  const ItemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
      return (
        [...oldItems, InputList]
      );
    });
    setInputList("");
  };

  const CheckMark = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };



  return (
    <div className="row">
      <div className="col s12 l4 offset-l4 ">
        <div className="box z-depth-3 ">
          <div className="box-content ">
            <div className="title pink lighten-1 white-text center-align"><h1>TodoList</h1></div>

            <div className="container">
              <div className="row">

                <div className="col s11 l11 input-field">
                  <input
                    type="text"
                    id="tasks"
                    autoComplete="off"
                    onChange={ItemEvent}
                    value={InputList}
                  />
                  <label for="tasks">Add Task</label>
                </div>

                <div className="col s1 l1">
                  <button className="btn-floating pink lighten-1 right waves-effect waves-light" type="submit" onClick={ListOfItems} >
                    <i className="material-icons ">add</i>
                  </button>

                </div>
              </div>
            </div>

            <div className="entries" id="entries">
              <ol>

                {Items.map((itemval, index) => {
                  return (
                    <TodoList2
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={CheckMark}
                    />
                  );
                })}

              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;