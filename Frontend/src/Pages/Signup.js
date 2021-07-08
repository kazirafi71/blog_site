import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginInfo, setLoginInfo] = useState("");
  const history = useHistory();

  const FormHandler = (e) => {
    e.preventDefault();

    fetch("/api/users/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoginInfo(result);
        if (result.id) {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="m-auto pt-5">
            <Paper className="shadow p-4">
              <h3 className="text-center pb-4">Signup Here</h3>
              <Form onSubmit={FormHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Enter username"
                  />
                  <Form.Text style={{ color: "red" }} className="">
                    {loginInfo && loginInfo.username && loginInfo.username[0]}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Text style={{ color: "red" }} className="">
                    {loginInfo && loginInfo.password && loginInfo.password[0]}
                    {loginInfo &&
                      loginInfo.non_field_errors &&
                      loginInfo.non_field_errors[0]}
                  </Form.Text>
                </Form.Group>
                <p>
                  Already have an account? <Link to="/login">Login here</Link>
                </p>

                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
