import React from "react";
import { Board, Profile, ProfileImg } from "./components";
function App() {
  return (
    <div className="App">
      <div className="animal-type-btn-group"></div>
      <ProfileImg />
      <Profile />
      <Board />
    </div>
  );
}

export default App;
