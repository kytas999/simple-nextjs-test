import { IPerson } from '@/types/person';
import { ISWArrayResponse } from '@/types/sw';
import { IVehicle } from '@/types/vehicle';
import { concatRoute } from '@/util/route';

/**
 * Fetches data from the Star Wars API (SW API).
 *
 * @template T - The expected return type of the API response.
 * @param {string} route - The API route to fetch data from.
 * @param {Record<string, string | number>} [searchParams={}] - An optional object containing query parameters to be appended to the route.
 * @param {RequestInit} [options={}] - Optional fetch options to customize the request.
 * @returns {Promise<T>} - A promise that resolves to the fetched data of type T.
 * @throws {Error} - Throws an error if the SW API URL is not defined in the environment variables or if the fetch request fails.
 */
const fetchSWApi = async <T>(
  route: string,
  searchParams: Record<string, string | number> = {},
  options: RequestInit = {},
): Promise<T> => {
  if (!process.env.SW_API_URL) {
    throw new Error('SW API url is not defined in .env!');
  }

  const query = concatRoute(route, searchParams);

  const res = await fetch(query, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch SW API');
  }

  return res.json();
};

/**
 * A service for interacting with the Star Wars API.
 */
export const apiService = {
  /**
   * Fetches a list of people from the Star Wars API.
   *
   * @param query - An optional query object to filter the results.
   * @returns A promise that resolves to an array response of people.
   */
  getPeople: (query: Record<string, string | number> = {}) =>
    fetchSWApi<ISWArrayResponse<IPerson>>('people', query),

  /**
   * Fetches a single person by ID from the Star Wars API.
   *
   * @param id - The ID of the person to fetch.
   * @returns A promise that resolves to the person object.
   */
  getPerson: (id: string) => fetchSWApi<IPerson>(`people/${id}`),

  /**
   * Fetches a list of vehicles from the Star Wars API.
   *
   * @param query - An optional query object to filter the results.
   * @returns A promise that resolves to an array response of vehicles.
   */
  getVehicles: (query: Record<string, string | number> = {}) =>
    fetchSWApi<ISWArrayResponse<IVehicle>>('vehicles', query),

  /**
   * Fetches a single vehicle by ID from the Star Wars API.
   *
   * @param id - The ID of the vehicle to fetch.
   * @returns A promise that resolves to the vehicle object.
   */
  getVehicle: (id: string) => fetchSWApi<IVehicle>(`vehicles/${id}`),
};
