import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import PropTypes from "prop-types";
import {
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
  Menu,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

const ListRecognition = (props) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { list } = props;

  const displayName = (name) => {
    let shortName = name.toUpperCase();
    return shortName.match(/\b(\w)/g);
  };
  const showTime = (time) => {
    var date = new Date(time);
    var milliseconds = Date.now() - date.getTime();
    return timeAgo.format(Date.now() - milliseconds, "time");
  };

  return (
    <Container>
      <Row>
        <Col xs="3"></Col>
        <Col>
          {list.map((object) => (
            <Card
              className="border border-primary mt-4 bg-light grey"
              key={object.id}
            >
              <Card.Header className="d-flex justify-content-around">
                <Button className="bg-success btn-sm">
                  <h5>+{object.hi5}</h5>
                </Button>
                <Button className="btn-sm bg-primary">
                  <h5>{displayName(object.name)}</h5>
                </Button>
                <Card.Text className="text-muted">
                  {showTime(object.time)} ago
                </Card.Text>
                <Menu>
                  <MenuButton className="btn bg-light grey">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem></MenuItem>
                    <MenuLink to="view"></MenuLink>
                  </MenuList>
                </Menu>
              </Card.Header>
              <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-left">
                <Card.Text>
                  <h5>{object.text}</h5>
                </Card.Text>
                <Card.Text className="text-primary font-weight-lighter">
                  <h5>#{object.core}</h5>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex content-left"></Card.Footer>
            </Card>
          ))}
        </Col>
        <Col xs="3"></Col>
      </Row>
    </Container>
  );
};
ListRecognition.defaultProps = {
  list: [
    {
      hi5: "1",
      name: "avinash",
      time: "2020-4-22 10:10:10",
      text:
        "recognition text:welcome to bonusly @sahil+bonasuly ! we are recognistion you with +25",
      core: "welcome to peerly",
    },
    {
      hi5: "2",
      name: "jitu bunde",
      time: "2019-2-4 12:00:00",
      text:
        "recognition text:welcome to bonusly @sahil+bonasuly ! we are recognistion you with +25",
      core: "welcome to peerly",
    },
    {
      hi5: "3",
      name: "onkar hasabe",
      time: "2018-3-4",
      text:
        "recognition text:welcome to bonusly @sahil+bonasuly ! we are recognistion you with +25",
      core: "welcome to peerly",
    },
  ],
};
ListRecognition.propTypes = {
  list: PropTypes.array,
};
export default ListRecognition;
