import "./App.css";
import { useEffect } from "react";
import { initAuthListener } from "@/Store/useAuthStore";
import Books from "./pages/Books";

function App() {
  useEffect(() => {
    const unsub = initAuthListener();
    return () => unsub();
  }, []);
  

  return <Books />;
}

export default App;
