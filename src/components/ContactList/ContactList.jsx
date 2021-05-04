import ContactItem from '../ContactItem'
import PropTypes from 'prop-types'

const ContactList = ({ contacts, onDeleteContact }) => (
	<ul>
		{contacts.map(contact => {
			const {id, name, number} = contact
			return (
                <li key={id}>
                    <ContactItem
						id={id}
						name={name}
						number={number}
						onDeleteContact={onDeleteContact}
					/>
                </li>
            )
		})}
	</ul>
)

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};
