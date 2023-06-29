import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

function SignUpPage() {
  return (
    <AuthTemplate>
      <AuthForm type="signup" />
    </AuthTemplate>
  );
}

export default SignUpPage;
