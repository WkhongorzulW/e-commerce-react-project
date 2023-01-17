import React from "react";
import { Nav, NavDropdown, NavLink } from "react-bootstrap";

const Category = (props) => {
  const subMenu =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child) => {
          return <NavDropdown.Item>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink className="menu-item">{props.title}</NavLink>
    );
  return (
    <div className="mx-auto nav-bar">
      <Nav>{subMenu}</Nav>
    </div>
  );
};

const Home = (props) => {
  const subMenu =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child) => {
          return <NavDropdown.Item>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink className="menu-item">{props.title}</NavLink>
    );
  return (
    <div className="mx-auto nav-bar">
      <Nav>{subMenu}</Nav>
    </div>
  );
};

const SubMenu = (props) => {
  const subMenu =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child) => {
          return <NavDropdown.Item>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink className="menu-item">{props.title}</NavLink>
    );
  return (
    <div className="mx-auto nav-bar">
      <Nav>{subMenu}</Nav>
    </div>
  );
};

export { SubMenu, Category };
