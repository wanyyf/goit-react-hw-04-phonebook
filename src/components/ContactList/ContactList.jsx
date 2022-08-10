import ContactItem from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
const ContactList = ({ filteredArray, deletebtn }) => {
  return (
    <ul>
      {filteredArray.map(el => (
        <ContactItem
          name={el.name}
          deletebtn={deletebtn}
          tel={el.number}
          id={el.id}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredArray: propTypes.array.isRequired,
  deletebtn: propTypes.func.isRequired,
};
export default ContactList;
