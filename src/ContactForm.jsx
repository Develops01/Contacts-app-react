import { useState, useEffect } from "react";
import Modal from "react-modal";

const ContactForm = ({
  onAddContact,
  onEditContact,
  editIndex,
  setEditIndex,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && number.trim() !== "") {
      if (editIndex === null) {
        onAddContact({ name, number });
      } else {
        onEditContact(editIndex, { name, number });
        setEditIndex(null);
      }
      setName("");
      setNumber("");
      setModalIsOpen(false);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className=" flex justify-end m-2">
      <button
        className="   bg-[#183227] text-[#D5D4CF] py-2.5 px-4 rounded hover:bg-[#143b2b]"
        onClick={openModal}
      >
        {editIndex !== null ? "Edit Contact" : "Add Contact"}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Contact Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
              type="submit"
            >
              {editIndex !== null ? "Edit" : "Add"}
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ContactForm;
