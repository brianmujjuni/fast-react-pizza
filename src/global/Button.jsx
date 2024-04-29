import { Link } from "react-router-dom";
export default function Button({ children, disabled, to,type }) {
  
   
    const base = "bg-yellow-400 uppercase  font-semibold tracking-wide text-stone-800  inline-block rounded-fullhover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed ";
   
    const style = {
      primary: base + 'px-4 py-3 md:px-6 md:py-4 rounded-full',
      small: base + 'px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs',
    }


  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
