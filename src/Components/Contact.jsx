import "aos/dist/aos.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Formulir Kontak & Informasi Komunikasi.
 * Didesain dengan tata letak modern, bersih, berkelas, dan profesional:
 * - Kartu info kontak di sebelah kiri dengan status ketersediaan kerja langsung.
 * - Formulir interaktif di sebelah kanan dengan validasi visual dan integrasi EmailJS.
 * - Dukungan penuh multi-bahasa (ID & EN).
 */
export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();

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
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error("EmailJS Error:", error?.text || error);
          setStatus("error");
          setIsSending(false);
        },
      );
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "lanxft1204@email.com",
      href: "mailto:lanxft1204@email.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: t.contact.location,
      href: null,
    },
    {
      icon: Clock,
      label: "Availability",
      value: t.contact.responseTime,
      href: null,
    },
  ];

  return (
    <section className="pt-24 pb-28" id="contact">
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Bagian Kontak */}
        <div className="flex flex-col items-center mb-14 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={14} className="text-primary" />
            <span>{t.contact.badge}</span>
          </div>
          <h3 className="text-3xl font-extrabold text-dark lg:text-4xl">
            {t.contact.title}
          </h3>
          <p className="max-w-2xl mt-3 text-sm font-normal text-slate-500 lg:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Tata Letak Dua Kolom: Info Kontak & Formulir Pesan */}
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Kolom Kiri: Kartu Informasi Kontak & Media Sosial */}
          <div
            className="lg:col-span-5"
            data-aos="fade-right"
          >
            <div className="relative p-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl shadow-xl border border-slate-700/60">
              {/* Aksen Latar Belakang Subtle Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none -z-0"></div>

              {/* Status Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-emerald-300">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>{t.contact.statusBadge}</span>
              </div>

              <h4 className="relative z-10 text-2xl font-bold tracking-tight mb-2">
                {t.contact.infoTitle}
              </h4>
              <p className="relative z-10 text-xs sm:text-sm leading-relaxed text-slate-300 mb-8">
                {t.contact.infoSubtitle}
              </p>

              {/* Daftar Detail Kontak */}
              <div className="relative z-10 space-y-4 mb-8">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-cyan-300 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-white truncate mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="block group"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={index}>{content}</div>;
                })}
              </div>

              {/* Tautan Media Sosial */}
              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Connect on Social
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/amamX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 transition-all duration-200"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amamm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 transition-all duration-200"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="mailto:lanxft1204@email.com"
                    aria-label="Direct Email"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 transition-all duration-200"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Pengiriman Pesan */}
          <div
            className="lg:col-span-7"
            data-aos="fade-left"
          >
            <div className="p-7 sm:p-9 bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {/* Input Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {t.contact.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {t.contact.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Input Subjek Pesan */}
                <div>
                  <label
                    htmlFor="user_subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="user_subject"
                    name="subject"
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                  />
                </div>

                {/* Input Pesan Utama */}
                <div>
                  <label
                    htmlFor="user_message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {t.contact.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="user_message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Tombol Kirim Pesan */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>{t.contact.sendBtn}</span>
                    </>
                  )}
                </button>

                {/* Banner Status Berhasil */}
                {status === "success" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 animate__animated animate__fadeIn">
                    <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold leading-relaxed">
                      {t.contact.success}
                    </p>
                  </div>
                )}

                {/* Banner Status Gagal */}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 animate__animated animate__fadeIn">
                    <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold leading-relaxed">
                      {t.contact.error}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
