import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

function getRandomBgColor() {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ statisticsData, statisticsTitle }) => {
  return (
    <div className="statistics" style={{ backgroundColor: getRandomBgColor() }}>
      {statisticsTitle && <h2 className="title">{statisticsTitle}</h2>}

      <ul className="stat-list">
        {statisticsData.map(statistics => (
          <li
            className="item"
            key={statistics.id}
            style={{ backgroundColor: getRandomBgColor() }}
          >
            <span class="label">{statistics.label}</span>
            <span class="percentage">{statistics.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
