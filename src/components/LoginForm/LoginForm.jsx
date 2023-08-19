import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };


  return (
    <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Email</label>
            <input
              type="email" 
              name="email"
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              title="Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Password</label>
            <input
                type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
                value={password}
                onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit">Add contact</button>
       </form>
    
  );
};