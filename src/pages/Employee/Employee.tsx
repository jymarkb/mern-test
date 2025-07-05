import NewEmployee from "@/components/newEmployee";
// import TableEmployee from "@/components/tableEmployee";
import { TableData } from "@/components/tableData";

const Employee = () => {
  return (
    <div className="wrapper flex justify-center">
      <div className="w-full max-w-[90%] mt-8">
        <h1 className="text-xl bg-secondary p-2">
          Employee: <span className="text-primary">Records</span>
        </h1>

       

        <div className="table-wrapper mt-4">
          {/* <TableEmployee /> */}
          <TableData/>
        </div>
      </div>
    </div>
  );
};

export default Employee;
