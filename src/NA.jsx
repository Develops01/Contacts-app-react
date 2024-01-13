import { useState } from "react";
import NaForm from "./Naform";
import Nalist from "./Nalist";
const NA = () => {
  const [con, setCont] = useState([]);
  const [ind, setInd] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const addCon = (newCon) => {
    setCont([...con, newCon]);
  };
  const editCont = (index, newCon) => {
    const saver = [...con];
    saver[index] = newCon;
    setCont(saver);
  };
  const deleteCon = (index) => {
    const saver = [...con];
    saver.splice(index, 1);
    setCont(saver);
  };
  const modOpen = () => {
    setIsOpen(true);
  };
  const modClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <img
        className="absolute h-48 top-2 left-2 rounded-xl"
        src="./imgContact.jpg"
        alt=""
      />
      <NaForm
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        modOpen={modOpen}
        modClose={modClose}
        addCon={addCon}
        editCont={editCont}
        ind={ind}
        setInd={setInd}
      />
      <Nalist
        modOpen={modOpen}
        con={con}
        setInd={(index) => setInd(index)}
        deleteCon={deleteCon}
      />
    </div>
  );
};
export default NA;
