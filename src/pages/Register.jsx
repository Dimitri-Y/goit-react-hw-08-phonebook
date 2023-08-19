import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Container } from './Pages.styled';

export default function Register() {
  return (
    <Container>
      <title>Registration</title>
      <RegisterForm />
    </Container>
  );
}