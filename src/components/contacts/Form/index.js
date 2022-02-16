import { useEffect, useState } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };
function Form({addContacts, contacts}) {
  const [formInput, setFormInput] = useState(initialFormValues);

  useEffect(() => {
    setFormInput(initialFormValues);
  }, [contacts]);

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formInput.fullName==="" && formInput.phoneNumber==="") {
        return false;
    }
    console.log(formInput);
    addContacts([...contacts, formInput]);
  };

  return (
    <div >
        <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="fullName"
            placeholder="Enter fullname"
            onChange={handleChange}
            value={formInput.fullName}
          />
        </div>
        <div>
          <input
            name="phoneNumber"
            placeholder="Enter phone number"
            onChange={handleChange}
            value={formInput.phoneNumber}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
