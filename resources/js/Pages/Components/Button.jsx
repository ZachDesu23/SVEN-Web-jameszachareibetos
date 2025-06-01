
export default function Button({onClick,children,color,className,backgroundColor, type="button", disabled=''}){
    return (
        <>
         <button
            type={type}
            disabled={disabled}
            className={className}
            onClick={onClick}
            style={{color: color,backgroundColor: backgroundColor}}
          >
            {children}
          </button>
        </>
    );
}