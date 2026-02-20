import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react";

type themeToggle = {
  isDarkMode: boolean,
}

function Contact({isDarkMode} : themeToggle) {
  const [result, setResult] = useState("");

  if(process.env.NEXT_PUBLIC_FORM_ACCESS_KEY === undefined){
    throw new Error("Access key missing!")
  }

  const web3AccessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", web3AccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90% auto] dark:bg-none'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! if you have any questions, comments, or feedback, please use the form below.
      </p>

      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90'
            type="text" 
            placeholder='Enter your name' 
            required 
            name="name"
            />
          <input
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90'
            name="email"
            type="email" placeholder='Enter your email' required />
        </div>
        <textarea
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90'
          name="message"
          rows={6}
          placeholder='Enter your message'
          required
        ></textarea>

        <button
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
          type="submit"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">
          {result}
        </p>
      </form>
    </div>
  )
}

export default Contact