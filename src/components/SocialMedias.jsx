import SocialMedia from "./SocialMedia";
import { useContext } from "react";
import QuotesContext from "../context/QuotesContext";
function SocialMedias(props) {
  const { quote, setQuote} = useContext(QuotesContext);

  return (
    <div className="flex items-center justify-center space-x-10 p-5 rounded-lg ">
      <SocialMedia icon={"facebook"} url={`http://www.facebook.com/sharer.php?[title]=`} text={quote.text}/>
      <SocialMedia icon={"twitter"} url={`http://twitter.com/share?text=`} text={quote.text}/>
      <SocialMedia icon={"linkedin"} url={`https://www.linkedin.com/shareArticle?mini=true&title=`} text={quote.text}/>
      <SocialMedia icon={"whatsapp"} url={`https://api.whatsapp.com/send?text=`} text={quote.text}/>
    </div>
  );
}

export default SocialMedias;
