import { useState } from "react";

import AppRouter from "components/Router";
import { authService } from "firebaseConfig";

function App() {
  const user = authService.currentUser;

  const [isLoggedIn, setIsLoggedIn] = useState(user);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
