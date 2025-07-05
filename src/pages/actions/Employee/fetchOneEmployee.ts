import { URL } from "@/lib/api";
const getEmployeeById = async(id: string) =>{
    const url = `${URL}/employees/${id}`;
    const fetchData = await fetch(url)
    return await fetchData.json();
}

export default getEmployeeById;