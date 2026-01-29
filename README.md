## TikTok Ads Creative Flow (Frontend Assignment)

Overview
This project is a simplified frontend application that simulates a TikTok Ads creative setup flow.
The goal of this assignment is not to build a full Ads Manager, but to demonstrate OAuth integration,
form validation, conditional logic, and clear, user-friendly error handling.

Tech Stack
- React (Vite)
- React Router
- JavaScript
- LocalStorage (for OAuth token simulation)

How to Run the Project
1. Clone the repository
   https://github.com/Dheeraj-cre/tiktok-ads-creative-flow.git
2. Install dependencies
   npm install
3. Start the development server
   npm run dev
4. Open the app in browser
   http://localhost:5173

Application Flow
1. User opens the app and sees Connect TikTok Ads Account button.
2. User is redirected to TikTok OAuth authorization page.
3. TikTok redirects back with an authorization code.
4. The app simulates access token exchange and stores the token in localStorage.
5. User is redirected to the dashboard where the ad creation form is available.

OAuth Implementation
OAuth Authorization Code flow is implemented on the frontend.
Token exchange is mocked to avoid exposing the client_secret.
In real production, OAuth would be handled via backend.

Ad Creation Form
Campaign Name (min 3 characters)
Objective (Traffic / Conversions)
Ad Text (max 100 characters)
CTA (Call To Action)

Music Selection Logic
Existing Music ID validation
Upload / Custom Music (mocked)
No Music allowed only for Traffic objective

Error Handling Strategy
Inline field-level validation errors
Global error banner for system-level issues
User-friendly error messages

Assumptions & Limitations
TikTok APIs are mocked due to geo restrictions.
No backend services included.

Improvements With More Time
Backend OAuth
Token refresh
Real TikTok Ads API integration



