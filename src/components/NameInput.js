import React, { useState } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NameInput(props) {
  const [item, setItem] = useState("");

  function onAddButtonClick() {
    props.addIt(oldItems => {
      console.log(oldItems);

      let newItems = Array.from(oldItems);
      toast(`New ${props.label} ${item}`);

      newItems.push(item);
      return newItems;
    });
  }

  function handleChange(event) {
    setItem(event.target.value);
  }
  function onClearItemsClick(event) {
    toast.error(props.clearMessage);
    props.addIt([]);
  }

  return (
    <div>
      <h2>{props.title}</h2>

      <label>{props.label}</label>
      <input type="text" value={item} onChange={handleChange} />
      <button onClick={onAddButtonClick}>
        Add
      </button>
      <button onClick={onClearItemsClick}>
        Clear
      </button>

    </div>
  )
}
