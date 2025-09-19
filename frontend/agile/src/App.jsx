import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
    setCurrentPage(page);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />

      {/* Optionnel : petits toggles pour tester l'apparence */}
      <div style={{ padding: "16px" }}>
        <button onClick={() => setIsLoggedIn((v) => !v)}>
          Toggle Login (actuel: {isLoggedIn ? "connecté" : "déconnecté"})
        </button>
        <button style={{ marginLeft: 8 }} onClick={() => setIsAdmin((v) => !v)}>
          Toggle Admin (actuel: {isAdmin ? "admin" : "user"})
        </button>
      </div>

      <Footer
      currentPage={currentPage}
      onNavigate={handleNavigate}
      />
    </>
  );
}

export default App;
