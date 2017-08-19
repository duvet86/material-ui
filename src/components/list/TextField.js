import React from "react";
import PropTypes from "prop-types";

const TextField = ({ record, source }) =>
  <span>
    {record[source]}
  </span>;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  sortable: PropTypes.bool
};

TextField.defaultProps = {
  record: {}
};

export default TextField;
