import React, { useState } from "react";
import "./style.css";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

function AddBar(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <header>
        <FormGroup
          // label="Add Item"
          labelFor="text-input"
          value={props.item}
          onChange={props.changeText}
          style={{ marginBottom: "0.5em" }}
        >
          <InputGroup id="text-input" placeholder="Grocery Item" />
        </FormGroup>
        <h6>Select Category </h6>
        <select
          name="dropDownValue"
          id="dropDown"
          value={props.dropDownValue}
          onChange={props.changeValue}
          style={{ marginBottom: "0.5em" }}
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

        <Button
          className="bp3-intent-success bp3-minimal bp3-outline bp3-button bp3-icon-add"
          onClick={props.handleSave}
          style={{ marginBottom: "0.5em" }}
        >
          Add Item
        </Button>
      </header>
    </div>
  );
}

export default AddBar;
