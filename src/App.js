import { Button, Col, Container, Row } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person);
  const handleDelete = () => {
    setPersonData([]);
  };

  const handleShow = () => {
    setPersonData(person);
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction onDelete={handleDelete} onView={handleShow} />
      </Container>
    </div>
  );
}

export default App;