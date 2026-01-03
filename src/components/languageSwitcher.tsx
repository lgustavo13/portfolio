"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../i18n/routing";
import { ChangeEvent, useTransition } from "react";

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
        className={`
          appearance-none
          bg-slate-900 
          border border-slate-700 
          text-cyan-400 
          text-sm 
          rounded-md 
          px-3 py-2 
          pr-8
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
          disabled:opacity-50
          transition-colors
        `}
      >
        <option value="pt">🇧🇷 PT</option>
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-cyan-400">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
