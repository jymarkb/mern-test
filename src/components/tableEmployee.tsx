import { tableHeader } from "@/lib/static";
import { useEffect, useState } from "react";
import { EmployeeType } from "@/lib/utils";
import { Trash, SquarePen } from "lucide-react";
import fetchEmployee from "@/pages/actions/Employee/fetchEmployee";
import { fallbackImage } from "@/pages/actions/Employee/validate";

const TableEmployee = () => {
  const [data, setData] = useState<EmployeeType[] | null>(null);


  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        const employeeData = await fetchEmployee();
        setData(employeeData);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };

    getEmployeeData();
  }, []);
  return (
    <table className="w-full text-sm bg-white shadow rounded-md border border-gray-200 overflow-hidden">
      <thead className="sticky top-0 bg-white z-10">
        <tr className="border-b border-gray-300">
          {tableHeader.map((item, index) => (
            <th
              key={index}
              className={`h-12 px-4 text-left font-semibold text-gray-600 bg-gray-50 border border-gray-200 ${
                index === 0 || index === 6 ? "w-[110px]" : ""
              }`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <tr
              key={index}
              className="border  transition-colors even:bg-gray-50 hover:bg-gray-100 odd:bg-white"
            >
              <td className="p-2 border border-gray-200">
                <img
                  src={`public/upload/${item.photo}`}
                  alt="employee photo"
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                  onError={(e) =>  fallbackImage({ e: e, src: "public" })}
                />
              </td>
              <td className="p-2 border border-gray-200">{`${item.firstname} ${item.lastname}`}</td>
              <td className="p-2 border border-gray-200">{item.username}</td>
              <td className="p-2 border border-gray-200">
                {item.country.name}
              </td>
              <td className="p-2 border border-gray-200">{item.email}</td>
              <td className="p-2 border border-gray-200">{item.type.type}</td>
              <td className="p-2 border border-gray-200">
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded text-white transition">
                    <SquarePen size={16} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 p-2 rounded text-white transition">
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              className="p-5 text-center text-gray-500 text-lg border border-gray-200"
              colSpan={7}
            >
              No data found!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableEmployee;
