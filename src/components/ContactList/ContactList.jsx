import {
  StyledContact,
  StyledBtnDel,
  StyledContactList,
} from './ContactList.Styled';

import { selectPhones, selectFilter } from '../../Redux/phoneSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { delPhone } from 'Redux/phoneSlice';

export const ContactList = ({ fileList }) => {
  const dispatcher = useDispatch();
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
          <StyledBtnDel id={el.id} onClick={() => dispatcher(delPhone(el.id))}>
            delete
          </StyledBtnDel>
        </StyledContact>
      ))}
    </StyledContactList>
  );
};
