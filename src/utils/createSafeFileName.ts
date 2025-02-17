export const createSafeFileName = (file: File): string => {
  const timestamp = Date.now();
  const safeName = `${timestamp}-${Math.random()}-${file.name}`
    .replace(/\//g, "")
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-_.]/g, "");

  return safeName;
};
