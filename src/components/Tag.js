
import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {

    const [tag, setTag] = useState('car');

    const {gif, loading, fetchData} = useGif(tag);



  return (
    <div className="w-1/2 h-[450px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      
      <h1 className="text-2xl underline uppercase font-bold">Random {tag}</h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} style={{maxWidth: "65%", maxHeight: "55%"}}/>)
      }

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      
     
      
      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-100 text-lg py-2 rounded-lg"
      >
        Generate
      </button>

    </div>
  )
}

export default Tag;