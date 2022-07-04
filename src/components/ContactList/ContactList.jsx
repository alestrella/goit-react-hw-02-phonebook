import PropTypes from 'prop-types';
import Box from 'components/Box';
import { ContactItem } from './ContactItem';

const ContactList = ({ values, handleDelete }) => {
  return (
    <Box display="flex" flexDirection="column" as="ul">
      {values.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </Box>
  );
};

export default ContactList;

ContactList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
