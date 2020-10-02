import React from "react";
import "./style.css";
import { FormGroup, Switch } from "@blueprintjs/core";

function ItemBar(props) {
  return (
    <FormGroup>
      <Switch {...props.itemName} labelElement={props.itemName} />
    </FormGroup>
  );
}

export default ItemBar;
