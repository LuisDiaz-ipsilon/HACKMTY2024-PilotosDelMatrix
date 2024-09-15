
import magic from "../assets/starsline.svg";

function Card(){
 return(
    <div className="bg-white shadow-lg col-span-4 row-span-4 grid grid-cols-7 grid-rows-8 rounded-md">
      <div className="col-span-1 row-span-8"></div>
      <p className="col-span-5 row-span-1 mt-5">Choose the topic</p>
      <div className="col-span-1 row-span-8"></div>
      <input name="tema" className="col-span-5 row-span-1 pl-4 m-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="topic" />
      <p className="col-span-5 row-span-1 mt-5">Choose your colors</p>
      <input name="tema" className="col-span-5 row-span-1 pl-4 m-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="topic" />
      <p className="col-span-5 row-span-1 mt-5">Text Style</p>
      <input name="tema" className="col-span-5 row-span-1 pl-4 m-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="topic" />
      <div className="col-span-1 row-span-2"/>
      <button className="col-span-3 row-span-2 m-8 rounded-md bg-indigo-600 text-white font-bold grid grid-cols-6 grid-rows-1">
         <p className="col-span-4 row-span-1 m-3">Imagine the Infographic</p>
         <img className="col-span-1 row-span-1 w-3/4 h-3/4 m-3" src={magic} alt="create"/>
         <div className="col-span-1 row-span-1"/>
      </button>
      <div className="col-span-1 row-span-2"/>
    </div>
 )   
}

export default Card