import React from 'react'

const SignupForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold mb-8">S'inscrire</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="username" className="text-gray-700 font-medium">Nom d'utilisateur</label>
        <input type="text" id="username" className="border border-gray-300 rounded-md px-3 py-2" />
        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
        <input type="email" id="email" className="border border-gray-300 rounded-md px-3 py-2" />
        <label htmlFor="password" className="text-gray-700 font-medium">Mot de passe</label>
        <input type="password" id="password" className="border border-gray-300 rounded-md px-3 py-2" />
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700">Créer un compte</button>
      </form>
    </div>
  )
}

export default SignupForm
