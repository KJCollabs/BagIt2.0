import React, { useState } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import "./style.css";

function AddBar(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <header>
        <FormGroup
          // helperText="Helper text with details..."
          label="Add Item"
          labelFor="text-input"
          // labelInfo="(required)"
          value={props.item}
          onChange={props.changeText}
        >
          <InputGroup id="text-input" placeholder="Grocery Item" />
        </FormGroup>
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

        <Button
          class="bp3-intent-success bp3-minimal bp3-outline bp3-button bp3-icon-add"
          onClick={props.handleSave}
        >
          Add Item
        </Button>
      </header>
    </div>
  );
}

export default AddBar;
