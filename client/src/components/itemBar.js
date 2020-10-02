import React from "react";
import "./style.css";
import { FormGroup, Switch } from "@blueprintjs/core";

function ItemBar(props) {
  return (
    <FormGroup
      style={{
        fontSize: "200%",
        height: "100%",
        textAlign: "left",
      }}
    >
      <Switch {...props.itemName} labelElement={props.itemName} />
    </FormGroup>
  );
}

export default ItemBar;
