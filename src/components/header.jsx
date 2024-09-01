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
        <Segment basic className="resume-details-segment">
          <h2>Software Development Engineer, Ather Energy</h2>
          <p>
            at, <a href="https://www.atherenergy.com/">atherenergy.com</a>
          </p>
          <List as="ul">
            <List.Item as="li">
              Architected and Developed batch deployment system for large-scale
              OTA updates using React, Redux, Golang, and SQL/NoSQL databases,
              streamlining fleet management.
            </List.Item>
            <List.Item as="li">
              Improved OTA deployment workflow by automating CSV file splitting
              and batch creation, reducing manual labour and the potential for
              human error.
            </List.Item>
            <List.Item as="li">
              Developed a one-click deployment mechanism with customizable
              scheduling, dramatically reducing manual labour and increasing
              operational efficiency for fleet-wide OTA updates.
            </List.Item>
            <List.Item as="li">
              Optimized API performance by implementing multi-level payload
              batching, reducing response time by 87% through frontend
              aggregation and database query optimization.
            </List.Item>
            <List.Item as="li">
              Developed automated MD5 checksum generation process triggered
              immediately after artifact upload using crypto/MD5 Golang package.
            </List.Item>
            <List.Item as="li">
              Integrated checksum data into update payload, enabling downstream
              verification by client devices.
            </List.Item>
            <List.Item as="li">
              Engineered responsive UI for live-location tracking feature in
              Ather Mobile App PWA with MapMyIndia API integration, enhancing
              user experience through real-time, localized vehicle positioning.
            </List.Item>
            <List.Item as="li">
              Integrated PostHog events into Ather Mobile App PWA for better
              user analytics.
            </List.Item>
            <List.Item as="li">
              Streamlined internal OTA tool by removing redundant pages and
              APIs, boosting performance and user experience.
            </List.Item>
          </List>
        </Segment>
      </Segment>
    </Segment>
  );
};

export default Header;
