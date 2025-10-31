
import { NavLink } from 'react-router-dom';

export default function Navbar() {
        return (
                <header className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <NavLink to="/" className="text-2xl font-bold text-blue-800">Edumotion</NavLink>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            <NavLink to="/" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-blue-600'}`}>Inicio</NavLink>
                            <NavLink to="/about" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-blue-600'}`}>Sobre</NavLink>
                            <NavLink to="/cursos" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-blue-600'}`}>Cursos</NavLink>
                            <NavLink to="/contact" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-blue-600'}`}>Contacto</NavLink>
                        </nav>
                        <div className="flex items-center gap-3">
                            <NavLink to="/login" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Acceder</NavLink>
                        </div>
                    </div>
                </header>
        );
}