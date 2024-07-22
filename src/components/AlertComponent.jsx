import { IoMdDoneAll } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export default function AlertComponent({ type }) {
  return (
    <>
      <div
        style={{
          color: type == false ? "#FF3737" : "#33CC33",
          boxShadow:
            type === true
              ? "0 10px 20px rgba(187, 247, 208, 0.4), 0 6px 6px rgba(187, 247, 208, 0.2)"
              : "0 10px 20px rgba(225, 29, 72, 0.4), 0 6px 6px rgba(225, 29, 72, 0.2)",
          border: type == false ? "1px solid red" : "1px solid green",
          borderRadius: "15px",
          backgroundColor: type === false ? "#fca5a5" : "#f7fee7",
        }}
        className="flex flex-row mx-auto my-auto m-4 h-fit p-3 w-fit z-10"
      >
        {type === true ? (
          <IoMdDoneAll className="text-green-400 text-2xl" />
        ) : (
          <RxCross2 className="text-red-500 text-2xl" />
        )}
        {type === true ? "Sent" : "try again"}
      </div>
    </>
  );
}
