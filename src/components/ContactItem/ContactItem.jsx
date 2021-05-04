import PropTypes from 'prop-types'

const ContactItem = ({id, name, number, onDeleteContact}) => (
    <>
        <p>{`${name}: ${number}`}</p>
        <button type= "button" onClick = {() => onDeleteContact(id)} >Delete</button>
    </> 
)

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};