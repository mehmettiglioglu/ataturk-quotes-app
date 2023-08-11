import { useContext } from "react";
import QuotesContext from "../context/QuotesContext";
function SocialMedia(props) {
  const { quote, setQuote} = useContext(QuotesContext);

  console.log(props.url)
    return (  
        <>
       <a target="_blank" href={props.url+props.text}><i onClick={props.onClick} className={`fa-brands fa-${props.icon}`} style={{fontSize:32,cursor:"pointer"}}></i></a> 
        </>
    );
}

export default SocialMedia;