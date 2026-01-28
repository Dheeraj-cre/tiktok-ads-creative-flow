function ConnectTikTok() {
  const handleConnect = () => {
    const clientId = "YOUR_CLIENT_ID"; // placeholder
    const redirectUri = encodeURIComponent(
      "http://localhost:5173/callback"
    );

    const oauthUrl = `
https://business-api.tiktok.com/portal/auth
?client_id=${clientId}
&scope=ads_management
&redirect_uri=${redirectUri}
&response_type=code
    `;

    window.location.href = oauthUrl;
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Connect TikTok Ads Account</h2>
      <button onClick={handleConnect}>
        Connect TikTok
      </button>
    </div>
  );
}

export default ConnectTikTok;
