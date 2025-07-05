import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn, DeleteDialogType } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { fallbackImage } from "@/pages/actions/Employee/validate";

const DeleteDialog: React.FC<DeleteDialogType> = ({
  isOpen,
  onOpenChange,
  handleClick,
  data,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-lg border bg-white p-6 shadow-lg space-y-4"
          )}
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">
              Delete Item
            </Dialog.Title>
            <Dialog.Close className="text-gray-500 hover:text-black cursor-pointer">
              <XIcon className="w-4 h-4" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-sm text-gray-600">
            Are you sure you want to delete this item?
          </Dialog.Description>
          <div className="flex mt-2 gap-4">
            <div className="image-wrapper">
              <img
                src={`upload/${data.photo}`}
                alt="employee image"
                height={100}
                width={100}
                onError={(e) => fallbackImage(e)}
              />
            </div>
            <div className="profile-wrapper flex flex-col justify-center">
              <div className="capitalize font-bold text-2xl">{data.name}</div>
              <p>
                {data.type}, {data.country}
              </p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Dialog.Close asChild>
              <Button className="cursor-pointer" variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button className="cursor-pointer" variant="destructive" onClick={handleClick}>
              Delete
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteDialog;
