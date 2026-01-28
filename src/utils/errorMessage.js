export function getErrorMessage(error) {
  // OAuth / Auth errors
  if (error.code === 401) {
    return "Your TikTok session has expired. Please reconnect.";
  }

  if (error.code === 403) {
    return "This feature is not available in your region.";
  }

  if (error.code === "PERMISSION_DENIED") {
    return "TikTok Ads permission is missing.";
  }
  if (error.code === "INVALID_MUSIC") {
  return "Selected music is not valid. Please try another.";
}


  // Generic fallback
  return "Something went wrong. Please try again.";
}
