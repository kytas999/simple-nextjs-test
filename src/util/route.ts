/**
 * Concatenates a base route with query parameters to form a complete URL.
 *
 * @param route - The base route to be concatenated.
 * @param params - An object containing key-value pairs to be used as query parameters.
 * @returns The complete URL as a string.
 *
 * @example
 * ```typescript
 * const url = concatRoute('users', { id: 123, name: 'John' });
 * console.log(url); // Outputs: 'https://example.com/api/users?id=123&name=John'
 * ```
 */
export const concatRoute = (
  route: string,
  params: Record<string, string | number>,
) => {
  const url = new URL(`api/${route}`, process.env.SW_API_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  return url.toString();
};
