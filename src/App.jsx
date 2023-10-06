import Random from "./components/Random"
import Tag from "./components/Tag"

const App = () => {
 
 
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
    <h1 className="bg-white w-11/12 rounded-lg text-center mt-[40px] px-10 py-2 text-4xl font-bold">
      RANDOM GIFS
    </h1>

    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
    </div>
  </div>
  )
}

export default App;