import "./TodoList.css";


const TodoList2 = (props) => {
  return (
    <div className="myEntries" >
      <button
        className="btn-floating btn-small pink lighten-1 waves-effect waves-light left"
        onClick={() => {
          props.onSelect(props.id);
        }}>
        <i className="material-icons">clear</i>
      </button>
      <h5 className="entry" id="entry" ><li >{props.text}</li></h5>
    </div>
  );
}

export default TodoList2;