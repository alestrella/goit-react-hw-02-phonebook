// import PropTypes from 'prop-types';
import { Item, Button, Name, Number } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
