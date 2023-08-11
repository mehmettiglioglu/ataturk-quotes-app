import QuotesContext from "../context/QuotesContext";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import SocialMedias from "./SocialMedias";
import { useState, useContext, useEffect } from "react";

function Quotes() {
  const { quote, setQuote,photo,setPhoto} = useContext(QuotesContext);

  const [isClicked,setIsClicked]=useState(false);
  const [isCopied,setIsCopied]=useState(false);

  const getSources = () => {
    setIsClicked(!isClicked);
  };

  const getImage=async()=>{
    
  }
  

  const handleClick = async () => {
    const response = await fetch("https://ataturk.deno.dev/", {
      method: "GET"
    }).then((res) => res.json());
    setQuote({ text: response.quote, sources: response.sources });

    fetch("/AtaturkPhotos.txt",{method:'GET'}).then((res)=>res.text()).then((res)=>{
      const photos=res.split("\n").filter((q)=>typeof q==="string" && q !== "");
      const randomPhoto=photos[Math.floor(Math.random()*photos.length)];
      setPhoto(randomPhoto);
    });
  };

  const copyToClipboard=()=>{
    navigator.clipboard.writeText(quote.text);

    setIsCopied(!isCopied);
    setTimeout(()=>{
      setIsCopied(false);
    },750)

  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="h-auto flex items-center flex-col justify-center xs:flex-row xs:h-auto">
      <div className="max-w[400px] max-h[200px]">

      <img
        src={photo}
        alt=""
        className="mb-4 rounded shadow-2xl border-2 border-gray-300 w-full h-full"
       
        />
        </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <Button name={'GENERATE QUOTE'} onClick={handleClick} />
        <Button name={'COPY QUOTE'} onClick={copyToClipboard} isCopied={isCopied}/>
      </div>
      <div className="quote block p-6 bg-white shadow ">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white p-8">
          <p>{quote.text}</p>
        </blockquote>
        <div className="relative">
          {quote.sources.length != 0 && (
            <>
              <i
                onClick={getSources}
                className="fa-solid fa-circle-info text-lg flex justify-end cursor-pointer"
              ></i>
              <span
                className={`absolute right-0 top popover ${
                  !isClicked ? "hidden" : ""
                }`}
              >
                {quote.sources.map((source) => (
                  <div key={source.id}>{source.source}</div>
                ))}
              </span>
            </>
          )}
        </div>
        <div className="">
          <SocialMedias/>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
