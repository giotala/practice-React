import React from "react";

function List(props) {
  // const listItems = numbers.map(number)

  return (
    <ul className="list-group">
     {
       
        props.groceries.map((groceryItem, index) => {
          return <li key={groceryItem.id} 
          style= {{textDecoration: groceryItem.purchased ? "line-through" : "none"}} 
          className="list-group-item">
          {groceryItem.name}
            </li>
        })
     }
    </ul>
  );
}

export default List;
