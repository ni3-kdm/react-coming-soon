import React from "react";
import PropTypes from "prop-types";

import "../styles/Description.css";

const Description = ({ text, slogan }) => (
  <div className="description">
    <p className="text">{text}</p>
    <p className="slogan">{slogan}</p>
  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default Description;
