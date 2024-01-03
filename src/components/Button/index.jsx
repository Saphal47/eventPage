const sizes = {
  full: 'w-full',
  default: 'w-[212px]'
}

export const Button = ({ children, color, onClick, size = 'default' }) => {
  
  return (
    <button
      className={`text-center py-2 px-6 text-white-100 text-base-bold w-64
        ${color} 
        ${sizes[size]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
