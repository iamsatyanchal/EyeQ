import eyes_data from "./data/eyes.json";
import { useState } from "react";
export default function App(){
  const randomn_number = Math.floor(Math.random() * eyes_data.length);
  const [rand_image, setrand_image] = useState(randomn_number);
  const [colour, setcolour] = useState("");
  const [selected, setselected] = useState<string | null>(null);
  const check_option = (option: string)=> {
    setselected(option);
    if(option == eyes_data[rand_image].answer){
      setcolour("bg-green-500/20");
      setTimeout(() => {
        setrand_image(randomn_number);
      }, 2000);
    }
    else {
      setcolour("bg-red-500/20");
      setTimeout(()=> {
        setcolour("");
        setselected(null);
      }, 2000);
    }
    }
  return (
    <>
    <main className="h-screen w-full bg-black font-sans text-white">
      <header className="h-14 flex items-center justify-center px-6 border-b border-white/20 bg-black z-[100] shrink-0 sticky top-0">
        <p className="font-display text-2xl tracking-wide font-bold uppercase block">
          ~ EyeQ ~
          </p>
      </header>

<section className="relative bg-black flex-1 overflow-hidden items-center">
  <img src={eyes_data[rand_image].image_url} className="w-full h-full object-cover"/>
</section>
<section className="h-12 bg-black z-[100]">
<div className="grid grid-cols-4 flex items-center h-12 w-full divide-x divide-white/20 fixed bottom-0 border-t border-white/20">
{
  eyes_data[rand_image].options.map((option)=> (
    <button 
    key={option}
    className={`text-center h-full capitalize tracking-wide text-lg outline-none transition-all duration-200
    ${selected == option ? colour : ""}`} onClick={()=> check_option(option)} >{option} <span>
      {selected == option && option == eyes_data[rand_image].answer ? "✓" : selected == option && option != eyes_data[rand_image].answer ? "✗" : ""}
      </span></button>
  ))
}
  </div>
</section>
  </main>
    </>
  )
}
