"use client";
import { useState } from "react";
import axios from "axios";
import { Input, Select } from "rizzui";
import { countryOptions, titleOptions } from "@/types/client";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [country, setCountry] = useState<any>(null);
  const [title, setTitle] = useState<any>(null);
  const [text, setText] = useState<string>("");

  function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const address = form.elements.namedItem("address") as HTMLInputElement;
    setSending(true);
    toast("Sending email");
    axios
      .post("/api/contact", {
        email: email.value,
        name: name.value,
        phone: phone.value,
        address: address.value,
        title: title.value,
        country: country.value,
        text: text,
      })
      .then(() => {
        setEmailSent(true);
        name.value = "";
        email.value = "";
        phone.value = "";
        address.value = "";
        setTitle(null);
        setCountry(null);
        setText("");
        toast.success("Thanks my friend!");
      })
      .catch(() => {
        toast.error("Something wrong happened, try again.");
      })
      .finally(() => setSending(false));
  }

  return (
    <div className="select-none flex justify-between h-full flex-col transition-all duration-500 w-full md:w-1/2 lg:w-2/3 gap-12">
      <span>
        <h1 className="font-bold flex text-4xl sm:text-6xl tracking-wide md:text-4xl lg:text-6xl whitespace-nowrap">
          Get in touch<p className="text-zinc-600">.</p>
        </h1>
        <h2 className="flex text-2xl font-light md:text-2xl lg:text-3xl text-zinc-600">
          I&apos;m Hussein Khazaal, nice to meet you!
        </h2>
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSendEmail(e);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-2xl rounded-md lg:text-2xl"
      >
        <Input
          placeholder="Name"
          name="name"
          id="name"
          inputClassName="text-lg"
        />
        <Select
          placeholder="Title"
          name="title"
          id="title"
          value={title}
          onChange={setTitle}
          options={titleOptions}
          optionClassName="font-absolut-pro text-lg"
          selectClassName="text-lg"
        />
        <Input
          placeholder="Address"
          name="address"
          id="address"
          inputClassName="text-lg"
        />
        <Select
          placeholder="Country"
          name="country"
          id="country"
          value={country}
          onChange={setCountry}
          optionClassName="font-absolut-pro text-lg"
          selectClassName="text-lg"
          options={countryOptions}
        />
        <Input
          placeholder="Email"
          name="email"
          id="email"
          inputClassName="text-lg"
        />
        <Input
          placeholder="Phone"
          name="phone"
          id="phone"
          inputClassName="text-lg"
        />

        <div className="md:col-span-2 contact-input relative w-full min-w-[200px]">
          <textarea
            className="font-absolut-pro font-medium text-xl tracking-wide peer h-full min-h-[100px] placeholder:text-transparent focus:placeholder:font-light focus:placeholder:text-zinc-600 w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-[#f6f6f7] px-3 py-2.5 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            id="message"
            value={text}
            placeholder="Your message here"
            minLength={3}
            onChange={(e) => {
              setText(e.target.value);
              if (emailSent) {
                setEmailSent(false);
              }
            }}
            disabled={sending}
          ></textarea>
          <label
            htmlFor="message"
            data-hide={text.length > 0}
            className="data-[hide=true]:hidden before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !text-[16px] lg:!text-[20px] font-medium lg:!leading-[60px] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:!text-[14px] peer-focus:!leading-tight text-gray-500 peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={sending}
          // onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
          className="md:col-span-2 contact-input align-middle text-lg lg:text-2xl select-none tracking-widest font-absolut-pro text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-zinc-800 text-white shadow-md shadow-zinc-900/10 hover:shadow-lg  hover:bg-zinc-900 hover:shadow-zinc-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
          {sending ? "Loading..." : emailSent ? "Thanks" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
