import { Request, Response } from "express";
import { supabase } from "@/supabase/server";

export const Login = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  return res.status(200).json({
    message: "Login successful",
    session: data.session,
    user: data.user,
  });
};
