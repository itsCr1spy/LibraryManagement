import React from "react";
import Table from "react-bootstrap/Table";
import './Dashboard.css'

function Dashboard({ filteredBookList }) {
  return (
    <div className="filter-table">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookList.map((element, id) => {
            return (
              <>
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{element.title}</td>
                  <td>{element.author}</td>
                  <td>{element.subject}</td>
                  <td>{element.date}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
