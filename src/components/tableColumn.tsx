import { TableEmployee } from "@/lib/utils";
import { fallbackImage } from "@/pages/actions/Employee/validate";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquarePen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { handleDelete, handleEdit } from "@/pages/actions/Employee/tableAction";
import ButtonWithDialog from "./ButtonWithDialog";

export const columns: ColumnDef<TableEmployee>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <div className="flex justify-center py-1">
        <img
          src={`upload/${row.getValue("photo")}`}
          alt="employee photo"
          className="w-12 h-12 object-cover"
          onError={(e) => fallbackImage(e)}
        />
      </div>
    ),
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("country")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Account Type
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleEdit(row.getValue("id"))}
            aria-label={`${row.getValue("id")}`}
            className="bg-orange-500 hover:bg-orange-600 p-2 rounded text-white transition cursor-pointer"
          >
            <SquarePen size={16} />
          </button>
          <ButtonWithDialog id={row.getValue("id")} data={row.original} />
        </div>
      );
    },
  },
];
