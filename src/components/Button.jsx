function Button(props) {
  return (
    <div className="relative">
      <button
        onClick={props.onClick}
        className="button text-white p-5 text-xl mb-5 hover:scale-105"
      >
        {props.name}
      </button>
      <span
        className={`absolute bottom-[-25px] left-0 right-0 bg-orange-300 rounded w-[50%] ml-auto mr-auto text-white font-semibold p-2 transition duration-150 ease-in-out ${!props.isCopied ? "hidden" : "" }`}
      >
        Copied
      </span>
    </div>
  );
}

export default Button;
