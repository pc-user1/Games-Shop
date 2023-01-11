import React from "react";
import Form from "react-bootstrap/Form";
import "./login-page.css";

export const LoginPage = () => {
  return (
    <div className="log-form">
      <h2 style={{ textAlign: "center" }}>ZALOGUJ SIĘ</h2>
      <Form method="post">
        <div className="imgcontainer"></div>
        <div className="container">
          <Form.Label for="uname">
            <b>Zaloguj się z użyciem nazwy konta</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Wpisz nazwę konta"
            name="uname"
            required
          />
          <Form.Label for="psw">
            <b>Hasło</b>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Wpisz hasło"
            name="psw"
            required
          />
          <button className="button-login" type="submit">
            Login
          </button>
          <Form.Label>
            <Form.Control type="checkbox" checked="checked" name="remember" />{" "}
            Zapamiętaj mnie
          </Form.Label>
        </div>
        <div className="container" style={{ color: "#f1f1f1" }}></div>
      </Form>
    </div>
  );
};
