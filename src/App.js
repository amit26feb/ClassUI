import './App.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';



function App() {
  var [selectedClass, textAreaData] = React.useState("");

  function handleChange(event) {
    textAreaData = event.target.value;
    console.log(textAreaData);
  }

  function _onSelect(event) {
    selectedClass = event.target.value;
    console.log(selectedClass);
  }

  function handleSubmit() {
    console.log(selectedClass, textAreaData);
    let classInfo = { className: selectedClass, attendenceData: textAreaData };
    fetch("https://geetaclassapi.herokuapp.com/GenerateExcel", {
      method: 'POST',
     
      body: JSON.stringify(classInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'accept':'*/*'
      },
      credentials: 'same-origin'
     
    })
      .then(response => response)
      .then(data => {
        console.log(data)
      })
  }


  return (
    <div>
      <Container>
        <Row><Col xs="auto"><h3> Class</h3></Col>
        </Row>

        <form className="form-group" >
          <Row >
            <Col xs="5">
              <select className="form-control" onChange={_onSelect} >
                <option id="Select Class" value="NA">Select Class</option>
                <option id="6" value="6">6th</option>
                <option id="7" value="7">7th</option>
                <option id="8" value="8">8th</option>
                <option id="9" value="9">9th</option>
                <option id="10" value="10">10th</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <input className="btn btn-success" type="button" value="Submit" onClick={handleSubmit} />
            </Col>
            <Col xs="3">
              <input className="btn btn-danger" type="reset" value="Clear" />
            </Col>
          </Row>
          <Row>
            <Col xs="5">
              <textarea className="form-control"
                name="textValue" rows={10} cols={10}
                onChange={handleChange} placeholder="Paste data here"
              />
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default App;
