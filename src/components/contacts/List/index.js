import { useState } from "react";

function List({ contacts }) {
  const [contactsList, setContactsList] = useState("");

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key].toLowerCase().includes(contactsList.toLowerCase());
    });
  });

  return (
    <div className="contact-list">
      <input style={{width:"100%"}}
        placeholder="Filter List"
        value={contactsList}
        onChange={(e) => setContactsList(e.target.value)}
      />
      <ul>
        {filtered.map((contact) => (
          <li key={contact.id}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
