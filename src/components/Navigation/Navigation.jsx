import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavigationContainer, NavigationDiv } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <NavigationDiv>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavigationDiv>

          <UserMenu />
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <AuthNav />
        </>
      )}
    </NavigationContainer>
  );
};