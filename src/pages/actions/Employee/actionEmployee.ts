import { API_URL } from "@/lib/api";

export const CreateEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to create employee");
  }
};

export const UpdateEmployee = async ({e, target}: {e: React.FormEvent<HTMLFormElement>; target:string})=> {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await fetch(`${API_URL}/employees/${target}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to create employee");
  }
}

export const DeleteEmployee = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/employees/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to delete employee");
    }
    return true;
  } catch (error) {
    return false;
  }
};