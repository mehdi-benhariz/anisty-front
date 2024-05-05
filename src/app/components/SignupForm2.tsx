import React from 'react'

interface SignupForm2Props {}

const SignupForm2: React.FC<SignupForm2Props> = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-500">S'inscrire</h1>
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
        <a href="#" className="text-sm text-center text-gray-500 mt-4">Mot de passe oublié?</a>
      </form>
      <div className="flex justify-center mt-6">
        <div className="w-full border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm font-medium">Élève</p>
            <label for="eleve" className="inline-flex items-center cursor-pointer">
              <input type="radio" id="eleve" name="role" value="eleve" className="w-5 h-5 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700 text-sm">Oui</span>
            </label>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700 text-sm font-medium">Enseignant</p>
            <label for="enseignant" className="inline-flex items-center cursor-pointer">
              <input type="radio" id="enseignant" name="role" value="enseignant" className="w-5 h-5 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700 text-sm">Oui</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm2;