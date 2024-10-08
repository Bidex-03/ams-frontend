import { useNavigate } from "react-router-dom";
import ButtonIcon from "../ui/ButtonIcon";
import { FiUser } from "react-icons/fi";

const User = () => {
  const navigate = useNavigate();

  return (
    <ButtonIcon>
      <FiUser onClick={() => navigate("/profile")} />
    </ButtonIcon>
  );
};

export default User;
