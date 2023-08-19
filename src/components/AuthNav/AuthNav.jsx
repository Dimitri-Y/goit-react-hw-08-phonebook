import { NavLink } from 'react-router-dom';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavContainer>
  );
};