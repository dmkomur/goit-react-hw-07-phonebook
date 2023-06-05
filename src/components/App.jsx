import { FormAdd } from './FormAdd/FormAdd';
import { ContactList } from './ContactList/ContactList';
import { Search } from './Search/Search';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <FormAdd />
      <Search />
      <ContactList />
    </div>
  );
};
