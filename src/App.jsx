import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import UploadPage from "./Components/UploadPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <UploadPage />
      ) : (
        <LoginPage onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;