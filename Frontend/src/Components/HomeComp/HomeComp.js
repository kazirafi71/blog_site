import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Paper, Button } from "@material-ui/core";

const HomeComp = () => {
  const [blogData, setBlogData] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    fetch("/api/all-posts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setBlogData(result);
      })
      .catch((err) => console.log(err));
  }, [del]);

  const deleteHandler = (id) => {
    fetch(`/api/all-posts/${id}/`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {})
      .catch((err) => console.log(err));

    const newData = blogData.filter((val) => {
      return val.id != id;
    });
    console.log(newData);
    setBlogData(newData);
  };
  return (
    <div>
      <Container>
        <Row>
          {blogData &&
            blogData.map((val) => {
              return (
                <Col className="p-3" md={4}>
                  <Paper
                    style={{ height: "200px", overFlow: "scroll" }}
                    className="p-3 text-center shadow"
                  >
                    <h4 className="text-primary">{val.title}</h4>
                    <p>{val.description}</p>
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteHandler(val.id)}
                      className="ml-3"
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </Paper>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default HomeComp;
