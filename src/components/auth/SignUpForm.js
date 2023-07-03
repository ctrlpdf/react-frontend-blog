import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
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
    if (password !== passwordConfirm) {
      // Have to be the same!
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
      console.log('signup failure', authError);
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
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpForm;
