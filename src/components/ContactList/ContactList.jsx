import {
  StyledContact,
  StyledBtnDel,
  StyledContactList,
} from './ContactList.Styled';
import { useEffect } from 'react';
import { selectPhones, selectFilter } from '../../Redux/phoneSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { delContactThunk } from 'Redux/phoneOperations';
import { fetchContactsThunk } from 'Redux/phoneOperations';

export const ContactList = ({ fileList }) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  const contacts = useSelector(selectPhones);
  const currentFilter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(currentFilter.toLocaleLowerCase())
  );

  return (
    <StyledContactList>
      <h3>Contacts</h3>
      {filteredContacts.map(el => (
        <StyledContact key={el.id}>
          <span>
            {el.name}: {el.number}
          </span>
          <StyledBtnDel
            id={el.id}
            onClick={() => dispatcher(delContactThunk(el.id))}
          >
            delete
          </StyledBtnDel>
        </StyledContact>
      ))}
    </StyledContactList>
  );
};
