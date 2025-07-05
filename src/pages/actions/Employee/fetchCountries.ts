import { URL } from "@/lib/api";
const fetchCountries = async () => {
    const url = `${URL}/countries`;
    const response = await fetch(url);
    return await response.json();
}

export default fetchCountries;