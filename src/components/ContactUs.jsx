import Button from "./common/Button";

const ContactUs = () => {
  return (
    <section className="min-h-[45vh] flex flex-col gap-8" id="contact">
      <h1 className="text-[3rem] self-start text-black_primary pl-4 border-l-[1rem] border-black_secondary capitalize">
        contact us
      </h1>

      <div className="grid sm:grid-rows-1 sm:grid-cols-2 gap-8">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <form
          action=""
          className="h-full w-full relative px-8 py-12 before:w-[0.5rem] focus:before:bg-gradient-to-tr before:h-full before:absolute before:right-0 before:top-0 before:bg-gradient-to-t  before:from-pink-600 before:to-purple-500 flex flex-col gap-4"
        >
          <h3 className="text-4xl capitalize text-black_primary">
            get in touch
          </h3>
          <input
            type="text"
            inputMode="text"
            placeholder="name"
            className="box bg-transparent py-6 pl-6 text-2xl outline-none border-b-[0.125rem] border-slate-300 placeholder:capitalize focus:border-black_primary"
          />
          <input
            type="email"
            inputMode="email"
            placeholder="email"
            className="box bg-transparent py-6 pl-6 text-2xl outline-none border-b-[0.125rem] border-slate-300 placeholder:capitalize focus:border-black_primary"
          />
          <input
            type="tel"
            placeholder="phone"
            inputMode="tel"
            className="box bg-transparent py-6 pl-6 text-2xl outline-none border-b-[0.125rem] border-slate-300 placeholder:capitalize focus:border-black_primary"
          />
          <textarea
            name=""
            placeholder="message"
            className="h-60 resize-none bg-transparent py-6 pl-2 text-2xl outline-none border-b-[0.125rem] border-slate-300 placeholder:capitalize focus:border-black_primary"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button labelText="send message" className="w-fit mt-4" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
