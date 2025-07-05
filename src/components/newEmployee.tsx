import { useNavigate } from "react-router-dom";
import { SquarePlus } from "lucide-react";
const NewEmployee = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <div className="action-wrapper">
      <button
        onClick={handleClick}
        className="text-white bg-primary py-1 px-2 flex items-center gap-1 rounded cursor-pointer"
      >
        <SquarePlus size={24} />
        <span className="text-lg">ADD EMPLOYEE</span>
      </button>
    </div>
  );
};

export default NewEmployee;
