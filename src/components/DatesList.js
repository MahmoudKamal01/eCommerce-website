import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DatesList({ person }) {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((person) => {
              return (
                <div className="d-flex border-bottom mx-3 my-2" key={person.id}>
                  <img className="img-avatar" alt="pic" src={person.img} />
                  <div className="px-2">
                    <p className="d-inline fs-5">{person.name}</p>
                    <p className="fs-6">{person.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="p-5">لا يوجد مواعيد اليوم</h3>
          )}
        </div>
      </Col>
    </Row>
  );
}
