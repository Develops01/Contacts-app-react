import { useState, useEffect } from "react";
import Modal from "react-modal";

const NaForm = ({
  modOpen,
  modClose,
  setIsOpen,
  isOpen,
  editCont,
  addCon,
  ind,
  setInd,
}) => {
  const [num, setnum] = useState("");
  const [name, setname] = useState("");
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const formHandler = (e) => {
    e.preventDefault();
    if (num.trim() !== "" && name.trim() !== "") {
      if (ind === null) {
        addCon({ num, name });
      } else {
        editCont(ind, { num, name });
        setInd(null);
      }
      setnum("");
      setname("");
      setIsOpen(false);
    }
  };

  return (
    <div className=" flex justify-end m-2">
      <button
        className="   bg-[#183227] text-[#D5D4CF] py-2.5 px-4 rounded hover:bg-[#143b2b]"
        onClick={() => modOpen()}
      >
        {ind === null ? "Add" : "Edit"}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={modClose}
        contentLabel="Edit Contact Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <form onSubmit={formHandler}>
          <div className="mb-4">
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Number"
              value={num}
              onChange={(e) => setnum(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
              type="submit"
            >
              {ind === null ? "Add" : "Edit"}
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => {
                modClose();
                setInd(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default NaForm;
