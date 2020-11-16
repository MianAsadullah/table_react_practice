import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleSort(key) {
    console.log("cliikr");
    this.setState({
      users: this.state.users.sort((a, b) => b[key] - a[key]),
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>list of users</h1>
        <div>
          <button
            onClick={() => {
              this.handleSort("id");
            }}
          >
            {" "}
            Sort by Name{" "}
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>userName</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.username}</th>
                  <th>{user.email}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
