import PropTypes from 'prop-types';
import { React } from 'react';

const LoadingTable = ({ quantity }) => {
  const imagineLines = (times) => {
    const lines = [];

    for (let i = 0; i < times; i += 1) {
      lines.push(
        <p className="placeholder-glow">
          <span className="placeholder col-12" />
        </p>,
      );
    }
    return lines;
  };

  return (
    <>{imagineLines(quantity)}</>
  );
};

LoadingTable.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default LoadingTable;
