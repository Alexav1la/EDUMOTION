import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const raw = localStorage.getItem('edumotion_user');
    if(!raw){
      navigate('/login');
      return;
    }
    setUser(JSON.parse(raw));
  },[navigate]);

  const handleLogout = () => {
    localStorage.removeItem('edumotion_user');
    navigate('/');
  }

  if(!user) return null;

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Panel de usuario</h1>
      <p className="text-blue-700 mb-6">Bienvenido, {user.email}</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">Cerrar sesión</button>
    </section>
  )
}
