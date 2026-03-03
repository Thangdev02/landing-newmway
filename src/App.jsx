// App.jsx
import { useState } from "react";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [showHome, setShowHome] = useState(false);

  if (!showHome) {
    return <WelcomePage onExplore={() => setShowHome(true)} />;
  }
return (
    <>
      <HomePage />
      <ChatWidget />
    </>
  );
}

export default App;