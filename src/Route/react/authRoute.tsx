import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/client";

interface AuthRouteProps {
  children: React.ReactNode;
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data.session && isLoginPage) {
        navigate("/employee");
      }

      if(!data.session && !isLoginPage){
        navigate("/login")
      }else{
        setChecking(false);
      }
    };

    checkSession();
  }, [location.pathname, navigate]);

  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Checking session...
      </div>
    );
  }

  return <>{children}</>;
};
