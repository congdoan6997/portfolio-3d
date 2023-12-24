const Alert = ({ type, message }) => {
  return (
    <div className="absolute lg:top10 top-12 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none
        lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${type === "danger" ? "bg-red-500" : "bg-blue-500"} 
            uppercase px-2 py-1 flex rounded-full text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="text-left ml-2 ">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
