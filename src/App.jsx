import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectTikTok from "./components/ConnectTikTok";
import Callback from "./pages/Callback";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("tiktok_token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <ConnectTikTok />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
