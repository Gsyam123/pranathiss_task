import React, { useState } from "react";
import axios from "axios";

export const GetAPI = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderTableHeader = () => {
    if (data.length === 0) {
      return null;
    }

    const keys = Object.keys(data[0]);

    return (
      <thead>
        <tr>
          {keys.map((key, i) => (
            <th key={i}>{key}</th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <div>
      <button
        onClick={getData}
        className="btn btn-info"
        style={{ margin: "30px 30px" }}
      >
        Get Data From Server
      </button>

      <table className="table table-success table-striped myTable">
        {renderTableHeader()}
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.fname}</td>
                <td>{d.lname}</td>
                <td>{d.tel}</td>
                <td>{d.address}</td>
                <td>{d.city}</td>
                <td>{d.state}</td>
                <td>{d.zip}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
