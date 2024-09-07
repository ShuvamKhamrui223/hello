const Button = ({ labelText = "button", gradient, icon, className }) => {
  return (
    <button
      className={`px-4 ${
        icon ? "py-2" : "py-4"
      } flex gap-2 capitalize text-2xl rounded-lg cursor-pointer outline-1 select-none outline transition-colors duration-300 
        ${
          gradient
            ? "outline-none text-white bg-gradient-to-r from-yellow-500 to-red-500 hover:from-red-500  hover:to-yellow-500"
            : "text-zinc-700 hover:bg-zinc-700 hover:text-zinc-100"
        } ${className}`}
    >
      <span>{labelText}</span>
      {/* icon will only render when it has been provided as prop */}
      {icon && <img src={icon} className="invert" />}
    </button>
  );
};

export default Button;
