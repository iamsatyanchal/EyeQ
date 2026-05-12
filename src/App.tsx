import eyes_data from "./data/eyes.json";

export default function App(){
  return (
    <>
    {
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
    }
    </>
  )
}
