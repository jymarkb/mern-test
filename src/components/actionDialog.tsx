import { TableEmployee } from "@/lib/utils";
import DeleteDialog from "./DeleteDialog";

export const ActionDialog = ({
  isOpen,
  onOpenChange,
  handleClick,
  data
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  handleClick: ()=> void;
  data:TableEmployee
}) => {
  return (
    <DeleteDialog isOpen={isOpen} onOpenChange={onOpenChange} handleClick={handleClick} data={data}/>
  );
};
