import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const AddBlog = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [loginInfo, setLoginInfo] = useState("");
  const history = useHistory();

  const FormHandler = (e) => {
    e.preventDefault();

    fetch("/api/all-posts/", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: "Token " + localStorage.getItem("auth_token"),
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoginInfo(result);
        if (result.id) {
          history.push("/");
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
              <h3 className="text-center pb-4">Add Your Blog Here</h3>
              <Form onSubmit={FormHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>title</Form.Label>
                  <Form.Control
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    placeholder="Enter title"
                  />
                  <Form.Text style={{ color: "red" }} className="">
                    {loginInfo && loginInfo.title && loginInfo.title[0]}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    onChange={(e) => setdescription(e.target.value)}
                    type="description"
                    placeholder="description"
                  />
                  <Form.Text style={{ color: "red" }} className="">
                    {loginInfo &&
                      loginInfo.description &&
                      loginInfo.description[0]}
                    {loginInfo &&
                      loginInfo.non_field_errors &&
                      loginInfo.non_field_errors[0]}
                  </Form.Text>
                </Form.Group>
                <p>
                  Don't have an account? <Link to="/signup">Signup here</Link>
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

export default AddBlog;
