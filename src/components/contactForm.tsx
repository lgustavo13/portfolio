"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";
import { PhoneInput } from "./phone-input";

export const ContactForm = () => {
  const t = useTranslations("ContactPage");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const companyPhone = "5519999727241";

    const text = `
  *${t("form.whatsapp_greeting")}*
  
  *${t("form.name")}:* ${formState.name}
  *${t("form.email")}:* ${formState.email}
  *${t("form.phone")}:* ${formState.phone}
  
  *${t("form.message")}:*
  ${formState.message}
      `.trim();

    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(whatsappUrl, "_blank");

    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;

    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormState((prev) => ({ ...prev, phone: value || "" }));
  };
  return (
    <div className="glass-panel rounded-2xl p-5 flex flex-col  border border-white/10 shadow-2xl shadow-cyan-900/10">
      <h2 className="text-2xl font-bold text-white mb-8">
        {t("form.send_message")}
      </h2>
      <p className="text-slate-400 mb-8 text-sm">{t("form.description")}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-white mb-2">
            {t("form.name")}
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="rounded-lg border border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
            placeholder={t("form.your_name")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-white mb-2"
            >
              {t("form.email")}
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="rounded-lg border border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
              placeholder={t("form.your_email")}
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-white mb-2"
            >
              {t("form.phone")}
            </Label>
            <PhoneInput
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-white mb-2"
          >
            {t("form.message")}
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formState.message}
            onChange={handleChange}
            className="border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all resize-none"
            placeholder={t("form.how_can_i_help")}
          ></Textarea>
        </div>

        <Button
          size="lg"
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 hover:cursor-pointer"
        >
          <MessageCircle size={20} />
          {t("form.whatsapp_chat")}
        </Button>
      </form>
    </div>
  );
};
