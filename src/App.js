import Dashboard from "./components/Dashboard";
import Filter from "./components/Filter";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import "./App.css"

function App() {
	const [filteredBooks,setFilteredBooks] = useState([]);
  return (
    <div className="App">
			<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Library Management
          </Navbar.Brand>
        </Container>
      </Navbar>
			<Filter setFilteredBooks={setFilteredBooks}/>
			<Dashboard filteredBookList={filteredBooks}/>
    </div>
  );
}

export default App;
