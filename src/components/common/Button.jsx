const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className = "",
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;