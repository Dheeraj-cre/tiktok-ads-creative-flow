export async function validateMusicId(musicId) {
  await new Promise((res) => setTimeout(res, 500));

  if (musicId.startsWith("invalid")) {
    throw { code: "INVALID_MUSIC" };
  }

  return true;
}
