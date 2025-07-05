import { API_URL } from "@/lib/api";
const fetchAcountType = async () => {
    const url = `${API_URL}/accountType`;
    const response = await fetch(url);
    return await response.json();
}

export default fetchAcountType;