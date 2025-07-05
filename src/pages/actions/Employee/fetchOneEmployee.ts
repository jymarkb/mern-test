import { API_URL } from "@/lib/api";
const getEmployeeById = async(id: string) =>{
    const url = `${API_URL}/employees/${id}`;
    const fetchData = await fetch(url)
    return await fetchData.json();
}

export default getEmployeeById;