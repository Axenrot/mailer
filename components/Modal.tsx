import React, { useEffect, useRef } from "react";

const Modal = ({
  modalOpen = false,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
}) => {
  const modal = useRef(null);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center text-zinc-900 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] shadow-2xl bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <h3 className="pb-[18px] text-xl font-light sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span
            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
          ></span>
          <p className="mb-10 text-2xl leading-relaxed font-absolut-pro dark:text-dark-6">
            The message has been received and I&apos;ll answer as soon as
            possible!
          </p>
          <div className="w-full flex items-center justify-center my-3">
            <button
              onClick={() => setModalOpen(false)}
              className="contact-input align-middle text-lg lg:text-2xl select-none tracking-widest font-absolut-pro text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-zinc-800 text-white shadow-md shadow-zinc-900/10 hover:shadow-lg  hover:bg-zinc-900 hover:shadow-zinc-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              See you soon!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
