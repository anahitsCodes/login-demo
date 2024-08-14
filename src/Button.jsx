function Button({children, bgColor, textColor, type, onClick, ...props}) {
  return (
    <button {...props} type={type} onClick={onClick}
            className={`${bgColor} ${textColor} px-4 py-2 rounded border-[#66837E] border-[1px]`}>{children}</button>
  );
}

export default Button;