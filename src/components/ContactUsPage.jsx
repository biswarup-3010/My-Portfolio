import { React, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Rating } from "primereact/rating";
import { FaHeart } from "react-icons/fa";
import AlertComponent from "./AlertComponent";

export default function ContactUsPage() {
  const [value, setValue] = useState(null);
  const [msgSnt, setMsgSnt] = useState(false);
  const [visible, setVisible] = useState(false);

  const form = useRef();

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 2000); // 2000ms = 2 seconds
    }
  }, [visible]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dgvcdfl", "template_op5qubm", form.current, {
        publicKey: "o5w9h67VdMQt4b5Ur",
      })
      .then(
        () => {
          form.current.reset();
          setMsgSnt(true);
          setVisible(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setMsgSnt(false);
          setVisible(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div
        className="m-1 mt-0 mb-0 border-l-2 border-r-2 h-auto md:min-h-screen  lg:min-h-screen xl:min-h-screen p-2"
        id="contactpage"
      >
        <span>
          <center className="text-xl font-bold m-5">Feed Back</center>
        </span>
        <br />

        <form ref={form} onSubmit={sendEmail}>
          {visible && <AlertComponent type={msgSnt} />}
          <div className="mx-auto w-full min-h-64 bg-gradient-to-b from-indigo-100/1`0 to-blue-100/10 rounded-[10px] p-4 sm:w-3/4 md:w-2/5">
            <li className="text-blue-100 mt-8">
              Name <br />{" "}
              <input
                className="h-8 w-full rounded-[5px] bg-blue-100/20 focus:outline-none p-2"
                type="text"
                name="user_name"
                required
              />
            </li>
            <br />
            <li className="text-blue-100">
              Email <br />{" "}
              <input
                type="email"
                className="h-8 w-full rounded-[5px] bg-blue-100/20 focus:outline-none p-2"
                name="user_email"
                required
              />
            </li>
            <br />
            <li className="text-blue-100">
              Your FeedBack/Queries{" "}
              <textarea
                className="min-h-16 w-full rounded-[5px] bg-blue-100/20 focus:outline-none p-2"
                placeholder="your feedback/queries here..."
                name="message"
              ></textarea>
            </li>
            <br />
            <li className="text-blue-100 flex flex-row gap-3">
              Rate this portfolio site{" "}
              <Rating
                name="user_rating"
                className="text-yellow-500 gap-1"
                value={value}
                onChange={(e) => setValue(e.value)}
                cancel={false}
                stars={5}
              />
            </li>
            <li className="text-end mt-8">
              <button
                type="submit"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700 "
                value="Send"
              >
                Send
              </button>
            </li>
          </div>
        </form>

        <p className="flex flex-row footer bottom-0 text-blue-100/40 text-sm gap-2 justify-center">
          it's made with{" "}
          <FaHeart
            className="text-red-500 text-xl animate-pulse"
            style={{
              animationDuration: "1s",
              animationIterationCount: "infinite",
            }}
          />
          by Me
        </p>
      </div>
      <span className="flex items-center text-indigo z-1 text-2xl">
        <span className="p-0 m-0 text-2xl">+</span>{" "}
        <hr className="h-px w-screen border-0 bg-white z-1" />{" "}
        <span className="p-0 m-0 text-2xl">+</span>
      </span>
    </>
  );
}
