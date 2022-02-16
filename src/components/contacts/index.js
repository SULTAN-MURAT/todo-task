import {useState} from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
    const [contacts, setContacts] = useState([]);
  return (
    <div className="contact-form">
      <Form addContacts={setContacts} contacts={contacts}/>
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
