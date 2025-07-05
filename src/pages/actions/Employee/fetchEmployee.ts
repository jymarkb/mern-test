import { API_URL } from "@/lib/api";
const fetchEmployee = async () => {
    const url = `${API_URL}/employees`;
    const response = await fetch(url);
    return await response.json();
  };


export default fetchEmployee;