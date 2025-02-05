import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          Selected Contact View
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
