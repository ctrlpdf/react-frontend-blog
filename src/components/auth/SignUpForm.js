import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    // If any of the field are empty
    if ([username, password, passwordConfirm].includes('')) {
      setError('Fill all the fields.');
      return;
    }
    // If password and passwordConfirm do not match
    if (password !== passwordConfirm) {
      setError('Passwords did not match.');
      return;
    }
    dispatch(signup({ username, password }));
  };

  // It initializes the form when it is first rendered.
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  // What to do with signup result
  useEffect(() => {
    if (authError) {
      // If there is already id in db
      if (authError.response.status === 409) {
        setError('There is already same ID');
        return;
      }
      // etc.
      setError('Sign Up Failure');
      return;
    }
    if (auth) {
      console.log('signup success', auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      alert('Your signup has been completed.');
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default SignUpForm;
