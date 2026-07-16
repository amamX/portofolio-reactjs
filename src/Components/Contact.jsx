import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_hdj5f0l",
        "template_pl528j7",
        form.current,
        "DEIHRSPiLwrEdHVvQ",
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setIsSending(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lanxft1204@email.com",
      href: "mailto:lanxft1204@email.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Banjarmasin, South Kalimantan",
      href: null,
    },
  ];

  return (
    <section className="pt-24 pb-24" id="contact">
      <div className="container">
        <div className="max-w-xl mx-auto mb-14 text-center">
          <h2
            className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-3xlxl"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Contact Me
          </h2>
          <p
            className="text-base font-medium md:text-lg text-slate-500"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Connect with Me and Share Your Thoughts. I&apos;m Here to Listen and
            Assist!
          </p>
        </div>

        <div className="flex flex-col gap-10 px-4 lg:flex-row lg:gap-6">
          <div
            className="lg:w-2/5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            <div className=" p-8 text-black shadow-lg rounded-2xl">
              <h3 className="mb-2 text-xl font-bold">Let's Talk</h3>
              <p className="mb-8 text-sm leading-relaxed text-black/80">
                Feel free to reach out through any of these channels. I usually
                respond within 24 hours.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white/15">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/60">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="transition duration-300 ease-in-out hover:opacity-80"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </div>
          </div>

          <div
            className="lg:w-2/3"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 border shadow-sm lg:p-8 rounded-2xl border-slate-100"
            >
              <div className="mb-5">
                <label htmlFor="name" className="text-sm font-bold text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 mt-1 text-sm rounded-md bg-slate-100 text-dark focus:outline-none focus:ring-black focus:ring-1 focus:border-black"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="text-sm font-bold text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 mt-1 text-sm rounded-md bg-slate-100 text-dark focus:outline-none focus:ring-black focus:ring-1 focus:border-black"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full h-28 p-3 mt-1 text-sm rounded-md bg-slate-100 text-dark focus:outline-none focus:ring-black focus:ring-1 focus:border-black"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-3 text-sm font-semibold text-white transition duration-500 rounded-lg bg-black hover:opacity-80 hover:shadow-lg disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm font-medium text-center text-green-600">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm font-medium text-center text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
