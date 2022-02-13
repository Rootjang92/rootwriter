import { useState } from "react";

import AppRouter from "components/Router";
import { authService } from "firebaseConfig";

const user = authService.currentUser();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(user);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
