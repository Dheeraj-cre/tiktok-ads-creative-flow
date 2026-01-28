// auth.js
// This file handles TikTok OAuth related logic (mocked)

export function startTikTokOAuth() {
  const clientId = "YOUR_CLIENT_ID"; // placeholder
  const redirectUri = encodeURIComponent("http://localhost:5173/callback");

  const oauthUrl = `
https://business-api.tiktok.com/portal/auth
?client_id=${clientId}
&scope=ads_management
&redirect_uri=${redirectUri}
&response_type=code
  `;

  window.location.href = oauthUrl;
}

// Mock exchange code for token (frontend-only)
export async function exchangeCodeForToken(code) {
  if (!code) {
    throw { code: "INVALID_CODE" };
  }

  // simulate API delay
  await new Promise((res) => setTimeout(res, 800));

  // return mock token
  return {
    access_token: "mock_tiktok_access_token",
    expires_in: 3600,
  };
}

// Logout helper
export function logout() {
  localStorage.removeItem("tiktok_token");
}
