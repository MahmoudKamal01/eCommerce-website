import React from "react";
import { Row, Col } from "react-bootstrap";
export default function DatesCount({ person }) {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
}
