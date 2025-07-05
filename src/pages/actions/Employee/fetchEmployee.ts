import { URL } from "@/lib/api";
const fetchEmployee = async () => {
    const url = `${URL}/employees`;
    const response = await fetch(url);
    return await response.json();
  };


export default fetchEmployee;