import React from "react";
import { AnimalTypeBtn, Board, Profile, ProfileImg } from "./components";
import { AnimalType } from "./type";
function App() {
  const animals: AnimalType[] = ["cat", "dog", "panda"];
  return (
    <div className="App">
      <div className="animal-type-btn-group">
        {animals.map((i) => (
          <AnimalTypeBtn type={i} />
        ))}
      </div>
      <ProfileImg />
      <Profile />
      <Board />
    </div>
  );
}

export default App;
