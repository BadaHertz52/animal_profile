import React, { useState } from "react";
import { AnimalTypeBtn, Board, Profile, ProfileImg } from "./components";
import { AnimalType } from "./type";
import ConfirmModal from "./components/Modal/ConfirmModal";
function App() {
  const animals: AnimalType[] = ["cat", "dog", "panda"];
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="animal-type-btn-group">
        {animals.map((i) => (
          <AnimalTypeBtn
            key={`btn-type_${i}`}
            type={i}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>
      {openModal && <ConfirmModal setOpenModal={setOpenModal} />}
      <ProfileImg />
      <Profile />
      <Board />
    </div>
  );
}

export default App;
