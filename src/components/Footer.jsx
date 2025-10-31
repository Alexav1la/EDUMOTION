const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 text-blue-800">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Edumotion. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/about" className="text-sm hover:text-blue-600">Sobre nosotros</a>
          <a href="/contact" className="text-sm hover:text-blue-600">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
