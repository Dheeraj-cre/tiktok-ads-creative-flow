export async function createAd(token, data) {
  await new Promise((res) => setTimeout(res, 1000));

  if (!token) {
    throw { code: 401 };
  }

  if (data.objective === "conversions") {
    throw { code: "PERMISSION_DENIED" };
  }

  if (data.campaignName.toLowerCase().includes("geo")) {
    throw { code: 403 };
  }

  return { success: true };
}
