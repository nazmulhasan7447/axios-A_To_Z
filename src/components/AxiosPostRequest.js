import React from "react";
import axios from "axios";
import authFetch from "./Interceptors";

// const url = "https://course-api.com/axios-tutorial-post";

const AxiosPostRequestWithRequestHeader = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [userObj, setUserObj] = React.useState({});


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await authFetch.post('/axios-tutorial-post', {name, email, password});
        console.log(response);
    } catch(error) {
        console.log(error);
    }
  };

  return (
    <center style={{ marginTop: "50px" }}>
      <h1>Axios Post Request Method With Request Header</h1>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form class="row g-3">
              <div class="col-6">
                <label for="inputAddress" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input 
                type="email" 
                class="form-control" 
                id="inputEmail4" 
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary" onClick={(e)=>handleFormSubmit(e)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </center>
  );
};

export default AxiosPostRequestWithRequestHeader;
