import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      alert("TikTok authorization was cancelled or failed.");
      navigate("/");
      return;
    }

    if (!code) {
      alert("Authorization failed. Please try again.");
      navigate("/");
      return;
    }

    // mock token save
    localStorage.setItem("tiktok_token", "mock_access_token");

    navigate("/dashboard");
  }, []);

  return <p>Connecting to TikTok...</p>;
}

export default Callback;
