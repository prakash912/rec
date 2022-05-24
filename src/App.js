import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import form2 from "./Components/Forms/form2";
import heroPic from "./Components/Forms/111.png";
import "./Components/Forms/form.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
     

     

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {/* {modalOpen &&  <form2/>} */}
    </div>
  );
}

export default App;