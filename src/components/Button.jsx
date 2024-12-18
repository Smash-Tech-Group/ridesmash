
// type ButtonProps = {
//     type : 'button' | 'submit';
//     title : string ;
//     icon ? : string ;
//     variant : string;
//     full? : boolean;
    


// }
const Button = ({type, title, icon, variant, full, color}) => {
  return (
    <button
        type={type}
        className= {`flex items-center justify-center gap-3 rounded-full border ${variant} ${full && 'w-1/2'}`}
    >
        {icon && <img src={icon}  alt={title} width={24} height={24} />}
        <label className={`bold-16 font-[700] whitespace-nowrap cursor-pointer ${color}`}>{title}</label>
    </button>
  )
}

export default Button