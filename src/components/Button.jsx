function Button({ text = "Click", href = "#", variant = "primary" }) {
  const baseStyles = "px-5 py-2 rounded-md font-medium transition duration-200";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </a>
  );
}

export default Button;