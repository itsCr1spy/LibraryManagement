import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Filter.css";

function Filter({ setFilteredBooks }) {
  const [bookList, setBookList] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const search = (data) => {
    if (title === "" && author === "" && subject === "" && date === "")
      return data;
    else {
      return data.filter(
        (o) =>
          (title && o.title.toLowerCase().indexOf(title) > -1) ||
          (author && o.author.toLowerCase().includes(author) > -1) ||
          (subject && o.subject.toLowerCase().includes(subject) > -1) ||
          (date && o.date === date)
      );
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookList(data);
        console.log(data);
        setFilteredBooks(data);
      });
  }, []);

  return (
    <div className="filter-container">
      <Container>
        <Row>
          <Col>
            {" "}
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Filter based on Title"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setTitle(e.target.value.toLowerCase());
                }}
              />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Filter based on Author"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setAuthor(e.target.value.toLowerCase());
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Filter based on Subject"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setSubject(e.target.value.toLowerCase());
                }}
              />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Filter based on Publish-Year"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Button
            variant="outline-success"
            onClick={() => {
              setFilteredBooks(search(bookList));
            }}
          >
            Filter
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;
