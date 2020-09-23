import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

function ItemBar(props) {
  return (
    <Form className="itemBar">
      {["checkbox"].map((type) => (
        <Row className="mb-3" key={`inline-${type}`}>
          <Form.Check
            className="checkBox"
            inline
            type={type}
            key={`inline-${type}-1`}
          />
          <Col>
            <p className="indItem">{props.itemName}</p>
          </Col>
        </Row>
      ))}
    </Form>
  );
}

export default ItemBar;
