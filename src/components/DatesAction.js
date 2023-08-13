import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DatesAction({ onDelete, onView }) {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between" sm="8">
        <button className="btn-style  p-2" onClick={onDelete}>
          مسح الكل
        </button>
        <button className="btn-style  p-2 text-center " onClick={onView}>
          {" "}
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
}
