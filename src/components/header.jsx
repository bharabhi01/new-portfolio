import React from "react";
import { Card, Segment, List } from "semantic-ui-react";
import "../App.css";

const Header = () => {
  return (
    <Segment basic>
      <Segment basic>
        <div>
          <h1>Hey,I'm Abhishek</h1>
        </div>
        <div>
          <p>A full stack developer from India.</p>
        </div>
      </Segment>
      <Segment basic>
        <h2>about me.</h2>
        <p>
          I am builder first of all. I let my curiosity lead the direction
          instead of tech stacks. Currently, I'm exploring designing scalable
          and robust systems.
        </p>
      </Segment>
      <Segment color="teal" className="resume-card">
        <p>I am open to</p>
        <div>
          <a href="https://drive.google.com/file/d/1ZvzaQhRTxMxDVTTfXDuQt0aEZgXpbIr4/view?usp=sharing">
            Resume
          </a>
        </div>
      </Segment>
      <Segment basic>
        <h3>worked as</h3>
        <Segment basic>
          <h2>Software Development Engineer, Ather Energy</h2>
          <p>
            at, <a href="https://www.atherenergy.com/">atherenergy.com</a>
          </p>
          <List as="ul">
            <List.Item as="li">Gaining Access</List.Item>
            <List.Item as="li">Inviting Friends</List.Item>
            <List.Item as="li">
              Benefits
              <List.List as="ul">
                <List.Item as="li">Rebates</List.Item>
                <List.Item as="li">Discounts</List.Item>
              </List.List>
            </List.Item>
            <List.Item as="li">Warranty</List.Item>
          </List>
        </Segment>
      </Segment>
    </Segment>
  );
};

export default Header;
