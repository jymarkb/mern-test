import { API_URL } from "@/lib/api";
const fetchCountries = async () => {
    const url = `${API_URL}/countries`;
    const response = await fetch(url);
    return await response.json();
}

export default fetchCountries;