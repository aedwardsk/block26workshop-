import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  // console.log("Contacts: ", contacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContacts();
  }, []);
  // console.log([contacts]);
  return (
    // <div>
    <table>
      <thead>
        <tr>
          <th className='listHead' colSpan='3'>
            Contact List
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='listHead'>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
        })}
      </tbody>
    </table>
    // {selectedContactId && <p>Selected Contact ID: {selectedContactId}</p>}
    // </div>
  );
}
