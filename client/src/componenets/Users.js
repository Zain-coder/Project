import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await Axios.get("http://localhost:9000/app/Users");
    setUser(response.data);
  };

  const handleDelete = (id) => {
    //alert(id);
    Axios.delete(`http://localhost:9000/app/User/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* {user.map((u) => { */}
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">FIRST Name</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user.map((details) => (
              <tr>
                <td>{details.Firstname}</td>
                <td>{details.Email}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(details._id)}
                  >
                    Delete
                  </button>
                </td>
                <td className="text-center">
                  <Link to={`/UpdateUser/${details._id}`}>
                    <button className="btn btn-danger">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* })} */}
    </div>
  );
}

export default Users;
