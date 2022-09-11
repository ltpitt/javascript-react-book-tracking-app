import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route
        path="/search"
        element={
          <SearchPage
          // onCreateContact={(contact) => {
          //   createContact(contact);
          // }}
          />
        }
      />
    </Routes>
  );
}

export default App;
