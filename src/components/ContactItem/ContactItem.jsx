import propTypes from 'prop-types';

const ContactItem = ({ name, tel, deletebtn, id }) => {
  return (
    <li>
      {name} {tel}{' '}
      <button type="button" className="button-2" onClick={() => deletebtn(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  tel: propTypes.string.isRequired,
  deletebtn: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};
export default ContactItem;
