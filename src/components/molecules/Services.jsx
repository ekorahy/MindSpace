import { ServiceItem } from "../atoms/ServiceItem";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const Services = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="my-10">
      <div className="rounded bg-slate-100 p-4 dark:bg-slate-950">
        <h2 className="text-center text-lg font-bold dark:text-white xl:text-2xl">
          {language === "en" ? "Why choose us" : "Mengapa memilih kami"}?
        </h2>
        <div className="mx-auto mt-4 grid max-w-screen-lg grid-cols-1 gap-2 sm:grid-cols-3">
          <ServiceItem
            title="Easy to use"
            icon="/services/service-easy.png"
          />
          <ServiceItem
            title="100% free"
            icon="/services/service-free.png"
          />
          <ServiceItem
            title="Trusted and secure"
            icon="/services/service-safe.png"
          />
        </div>
      </div>
    </div>
  );
};
