/**
 * Extracts the ID from a given URL.
 *
 * @param url - The URL string from which to extract the ID.
 * @returns The extracted ID as a string.
 */
export const getIdFromUrl = (url: string) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
};
