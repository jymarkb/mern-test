import { Trash } from "lucide-react";
import { useState } from "react";
import { ActionDialog } from "./actionDialog";
import { TableEmployee } from "@/lib/utils";
import { DeleteEmployee } from "@/pages/actions/Employee/actionEmployee";
import {
  failedDeleteToast,
  successDeleteToast,
} from "@/pages/actions/Employee/validate";
import { useNavigate } from "react-router-dom";

const ButtonWithDialog = ({
  id,
  data,
}: {
  id: string;
  data: TableEmployee;
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    const isDeleted = await DeleteEmployee(id);

    if (isDeleted) {
      successDeleteToast();
    } else {
      failedDeleteToast();
    }
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-details={id}
        className="bg-red-500 hover:bg-red-600 p-2 rounded text-white transition cursor-pointer"
      >
        <Trash size={16} />
      </button>

      <ActionDialog
        isOpen={open}
        onOpenChange={setOpen}
        handleClick={handleConfirm}
        data={data}
      />
    </>
  );
};

export default ButtonWithDialog;
