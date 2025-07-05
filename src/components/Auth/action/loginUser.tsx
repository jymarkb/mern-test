import { supabase } from "@/supabase/client";
import { toast } from "sonner";

export const LoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    toast.error("Email and password are required.", {
      position: "top-center",
    });
    return false;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error("Invalid login: ", {
      description: error.message,
      position: "top-center",
    });
    return false;
  }

  return true;
};
