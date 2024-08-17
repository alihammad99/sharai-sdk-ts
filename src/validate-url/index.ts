export function validateUrl() {
  const url = process.env.SHARAI_SERVER_URL;
  if (!url) {
    return console.error(
      `Please add a valid Sharai server URL to your environemt`
    );
  }
}
