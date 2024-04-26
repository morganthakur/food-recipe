// src/components/Rating/Rating.jsx
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Rating.css'; // Make sure to create a corresponding CSS file for styles

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span key={ratingValue}>
            {value >= ratingValue ? (
              <FaStar style={{ color }} />
            ) : value >= ratingValue - 0.5 ? (
              <FaStarHalfAlt style={{ color }} />
            ) : (
              <FaRegStar style={{ color }} />
            )}
          </span>
        );
      })}
      {text && <span>{text}</span>}
    </div>
  );
};

// Default color for stars if not provided
Rating.defaultProps = {
  color: '#E50000',
};

// Typechecking with PropTypes
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
