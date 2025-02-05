import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (!selectedContactId) return;

    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contact");
        }

        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      <h1>{contact?.name}</h1>
      <p>
        <strong>ID:</strong> {selectedContactId}
      </p>
      <table>
        <thead>
          <tr>
            <th scope='row'>Contact Info</th>

            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Username</th>
            <th scope='col'>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td scope='col'>{contact?.email}</td>
            <td scope='col'>{contact?.phone}</td>
            <td scope='col'>{contact?.username}</td>
            <td scope='col'>
              {contact?.address?.street}, {contact?.address?.city}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>Deselect Contact</button>
    </div>
  );
}
