import React from 'react'

interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = () => {
  return (
    <div className="relative w-full max-w-md bg-white rounded-lg shadow-md px-8 py-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">S'inscrire</h1>
      <form className="flex flex-col gap-4">
        <div className="mb-4">
          <label htmlFor="username" className="text-gray-700 text-sm font-medium block mb-2">Nom d'utilisateur</label>
          <input type="text" id="username" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700 text-sm font-medium block mb-2">Email</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700 text-sm font-medium block mb-2">Mot de passe</label>
          <input type="password" id="password" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 w-full">Créer un compte</button>
      </form>
    </div>
  )
}

export default SignupForm
