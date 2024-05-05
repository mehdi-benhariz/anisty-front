import SignupForm from '../components/SignupForm'

const RegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <SignupForm />
      </div>
    </div>
  )
}

export default RegisterPage
