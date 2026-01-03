"use client";

import { ContactForm } from "@/src/components/contactForm";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contato() {
  const t = useTranslations("ContactPage");

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luiz-gustavo-silva-194b6b1a1/",
    },
    {
      name: "GitHub",
      href: "https://github.com/lgustavo13",
    },
  ];

  return (
    <section className="py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-slate-400 text-lg mb-8">{t("description")}</p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">{t("email")}</p>
                <Link
                  href="mailto:luizgustavo974@hotmail.com"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  luizgustavo974@hotmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">{t("social")}</p>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-purple-400 transition-colors"
                      target="_blank"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
