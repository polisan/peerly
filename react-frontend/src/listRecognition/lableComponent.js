import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
const LabelComponent = (props) => {
  const { labelText, className } = props;

  return <Form.Label className={className}> {labelText} </Form.Label>;
};

LabelComponent.defaultProps = {
  allClasses: "",
};

LabelComponent.propTypes = {
  labelText: PropTypes.string,
  className: PropTypes.string,
};
export default LabelComponent;
