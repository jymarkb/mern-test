import { URL } from "@/lib/api";
const fetchAcountType = async () => {
    const url = `${URL}/accountType`;
    const response = await fetch(url);
    return await response.json();
}

export default fetchAcountType;