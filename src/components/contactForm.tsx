"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { formatPhone } from "../utils/formatPhone";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
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
  *Olá! Vim através do site e gostaria de um atendimento.*
  
  *Nome:* ${formState.name}
  *Email:* ${formState.email}
  *Telefone:* ${formState.phone}
  
  *Mensagem:*
  ${formState.message}
      `.trim();

    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");

    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = formatPhone(value);
    }

    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };
  return (
    <div className="glass-panel rounded-2xl p-5 flex flex-col  border border-white/10 shadow-2xl shadow-cyan-900/10">
      <h2 className="text-2xl font-bold text-white mb-8">Envie uma Mensagem</h2>
      <p className="text-slate-400 mb-8 text-sm">
        Preencha os dados abaixo para ser atendido via WhatsApp pelo nosso time.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-white mb-2">
            Nome Completo
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="rounded-lg border border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-white mb-2"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="rounded-lg border border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-white mb-2"
            >
              Telefone
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="rounded-lg border border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-white mb-2"
          >
            Mensagem
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formState.message}
            onChange={handleChange}
            className="border-slate-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all resize-none"
            placeholder="Como posso ajudar você?"
          ></Textarea>
        </div>

        <Button
          size="lg"
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 hover:cursor-pointer"
        >
          <MessageCircle size={20} />
          Iniciar Conversa no WhatsApp
        </Button>
      </form>
    </div>
  );
};
