import { handleResponse, handleError } from "./api.utils";
const url = "https://pocapi.song88.com/api/v1/fixtures";

export function getFixtures() {
	return fetch(url).then(handleResponse).catch(handleError);
}
