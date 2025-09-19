import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);   // toggle pour tester
  const [isAdmin, setIsAdmin] = useState(false);        // toggle pour tester

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

      {/* Laisse le reste vide pour voir le Header "seul" */}
      <main style={{ height: "60vh", background: "#f7f7f7" }} />
    </>
  );
}

export default App;
