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
