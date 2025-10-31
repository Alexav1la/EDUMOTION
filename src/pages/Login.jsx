import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // login simple: guardar 'auth' en localStorage
    if(email && password){
      localStorage.setItem('edumotion_user', JSON.stringify({email}));
      navigate('/dashboard');
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-md">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-md p-6">
        <label className="block mb-3">
          <span className="text-sm text-blue-700">Correo</span>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border rounded-md px-3 py-2" required />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-blue-700">Contraseña</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 block w-full border rounded-md px-3 py-2" required />
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Acceder</button>
      </form>
    </section>
  )
}
