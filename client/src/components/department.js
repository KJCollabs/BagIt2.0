import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../utils/API";
import ItemBar from "./itemBar";
import { Container } from "react-bootstrap";
// import items from "../utils/API";
function Department() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    API.getAllItems()
      .then((res) => setResult(res.data.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container id="departmentContainer">
      <h4>*Department Name*</h4>
      {/* needs to know based on what the user picks in the drop down */}
      {/* {DepartmentName} here... with hook? */}
      {result.map((currentItem) => {
        return (
          <ItemBar key={currentItem.id} itemName={currentItem.items_name} />
        );
      })}
    </Container>
  );
}

export default Department;
// use loop to render multiple ItemBar.
