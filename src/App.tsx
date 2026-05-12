import eyes_data from "./data/eyes.json";
import { useState } from "react";
export default function App(){
  const randomn_number = Math.floor(Math.random() * eyes_data.length);
  const [rand_image, setrand_image] = useState(randomn_number);
  return (
    <>
    <main className="h-screen w-full bg-black font-sans text-white">
      <header className="h-14 flex items-center justify-center px-6 border-b border-white/20 bg-black z-[100] shrink-0 sticky top-0">
        <p className="font-display text-2xl tracking-wide font-bold uppercase block">
          ~ EyeQ ~
          </p>
      </header>

<section className="relative bg-black flex-1 overflow-hidden items-center border-b border-white/20">
  <img src={eyes_data[rand_image].image_url} className="w-full h-full object-cover"/>
</section>
<section className="h-12 bg-black z-[100]">
<div className="grid grid-cols-4 flex items-center h-12 w-full divide-x divide-white/20">
<button className="text-center h-full capitalize tracking-wide text-lg outline-node hover:bg-white/5">{eyes_data[rand_image].options[0]}</button>
<button className="text-center h-full capitalize tracking-wide text-lg outline-node hover:bg-white/5">{eyes_data[rand_image].options[1]}</button>
<button className="text-center h-full capitalize tracking-wide text-lg outline-node hover:bg-white/5">{eyes_data[rand_image].options[2]}</button>
<button className="text-center h-full capitalize tracking-wide text-lg outline-node hover:bg-white/5">{eyes_data[rand_image].options[3]}</button>  
  </div>
</section>

    {/* {
      eyes_data.map((item, index) => (
        <div key={index}>
          <img src={item.image_url}/>
          {
            item.options.map((options, index)=> (
              <p key={index}>{options}</p>
            ))
          }
          <p>right option: {item.answer}</p>
        </div>
      ))
    } */}
    </main>
    </>
  )
}
