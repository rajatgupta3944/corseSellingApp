import { useAuth } from "react-oidc-context";
import CourseButton from "../../../components/common/CourseButton";

const LogoutButton = () => {
  const auth = useAuth();

  const logout = () => {
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_COGNITO_AUTHORITY;

    // clear local tokens
    auth.removeUser();

    // redirect to Cognito logout
    window.location.href =
  `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return <CourseButton onClick={logout} label="Logout" type="primary" danger />;
};

export default LogoutButton;
