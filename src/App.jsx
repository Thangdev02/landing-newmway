// App.jsx
import { useState } from "react";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const [showHome, setShowHome] = useState(false);

  if (!showHome) {
    return <WelcomePage onExplore={() => setShowHome(true)} />;
  }

  return <HomePage />;
}

export default App;