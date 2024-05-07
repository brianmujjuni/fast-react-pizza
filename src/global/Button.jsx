import { Link } from "react-router-dom";
export default function Button({ children, disabled, to,type,onClick }) {
  
   
    const base = "bg-yellow-400 text-sm uppercase  font-semibold tracking-wide text-stone-800  inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed ";
   
    const style = {
      primary: base + 'px-4 py-3 md:px-6 md:py-4 rounded-full',
      small: base + 'px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs',
      secondary: "text-sm border-2 border-stone-300 px-4 py-3 md:px-6 md:py-4 rounded-full uppercase  font-semibold tracking-wide text-stone-800  inline-block hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed "
    }


  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  if(onClick){
    return (
      <button onClick={onclick} disabled={disabled} className={style[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
