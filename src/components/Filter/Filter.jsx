import propTypes from 'prop-types';

const Filter = ({ onChange, valueInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={valueInput} onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
  valueInput: propTypes.string.isRequired,
};
export default Filter;
