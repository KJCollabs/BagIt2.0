import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function AddBar(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <header>
        <Form.Control
          type="text"
          placeholder="Add Item"
          name="item"
          value={props.item}
          onChange={props.changeText}
        />
        <h6>Select Category </h6>
        <select
          name="dropDownValue"
          id="dropDown"
          value={props.dropDownValue}
          onChange={props.changeValue}
        >
          {props.categories.length > 0
            ? props.categories.map((category) => {
                return (
                  <option key={category.id}>
                    {category.id + ". " + category.category_name}
                  </option>
                );
              })
            : ""}
        </select>
        <Button id="addItem" onClick={props.handleSave}>
          Add Item
        </Button>
      </header>
    </div>
  );
}

export default AddBar;
