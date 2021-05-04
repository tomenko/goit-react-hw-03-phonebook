import PropTypes from 'prop-types';

const Filter = ({id, hendleInputFilter}) => {
    return (
        <>
            <h3>Find contats by name</h3>
            <input
                type="text"
                name="filter"
                id={id}
                onChange = {hendleInputFilter}
            />
        </>
    )
}

export default Filter;

Filter.propTypes = {
  hendleInputFilter: PropTypes.func.isRequired,
};