"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../i18n/routing";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const t = useTranslations("Header");

  const options = [
    { value: "pt", label: "🇧🇷 PT" },
    { value: "en", label: "🇺🇸 EN" },
    { value: "es", label: "🇪🇸 ES" },
  ];

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative">
      <Select
        defaultValue={localActive}
        onValueChange={onSelectChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-cyan-400 focus:ring-cyan-500/50 focus:border-cyan-500 hover:cursor-pointer">
          <SelectValue placeholder={t("LanguageSwitcher.title")} />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-slate-700 text-cyan-400">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="focus:bg-slate-800 focus:text-cyan-400 hover:cursor-pointer"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
