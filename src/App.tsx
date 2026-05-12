import eyes_data from "./data/eyes.json";

export default function App(){
  return (
    <>
    <main className="h-full w-full bg-black font-sans text-white">
      <header className="h-14 flex items-center justify-center px-6 border-b border-white/20 bg-black z-[100] shrink-0 sticky top-0">
        <p className="font-display text-2xl tracking-wide font-bold uppercase block">
          ~ EyeQ ~
          </p>
      </header>
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
