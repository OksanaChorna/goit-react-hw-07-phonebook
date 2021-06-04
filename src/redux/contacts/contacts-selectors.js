/* eslint-disable import/no-anonymous-default-export */
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getFilteredContact = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  return contacts;
};

export default { getFilter, getFilteredContact, getAllContacts };
