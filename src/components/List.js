import "./UserList.css"


function List(props) {

  return (
    <>
    <div className="users">
      <ul>
      { props.items.map((item) => {
        return <li key={item.id}>{item.user} ({item.age} years old)</li>
            })}
          </ul>
      </div>
    </>
  );
}

export default List;

