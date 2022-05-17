import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          title: "What We Do",
          description :"Cubedots is a proptech company that aims to revolutionise real estate sales, marketing and management. By building a bridge between our partners and the top developers, we have created a safer, faster and more reliable way to increase real estate sales."
        }
      },
      de: {
        translations: {
          title: "Ce que nous faisons",
          description:"Cubedots est une entreprise proptech qui vise à révolutionner la vente, le marketing et la gestion de l'immobilier. En établissant un pont entre nos partenaires et les meilleurs promoteurs, nous avons créé un moyen plus sûr, plus rapide et plus fiable d'augmenter les ventes immobilières."
        }
      },
      pr: {
        translations: {
          title: "کاری که ما انجام می دهیم",
          description:"Cubedots یک شرکت پروتکل است که هدف آن انقلابی در فروش، بازاریابی و مدیریت املاک و مستغلات است. با ایجاد پل بین شرکای خود و توسعه دهندگان برتر، راه ایمن تر، سریع تر و مطمئن تر برای افزایش فروش املاک و مستغلات ایجاد کرده ایم."
        }
      },
      tr: {
        translations: {
          title: "Ne Yapıyoruz",
          description:"Cubedots, gayrimenkul satış, pazarlama ve yönetiminde devrim yaratmayı hedefleyen bir proptech şirketidir. Ortaklarımız ve en iyi geliştiriciler arasında bir köprü kurarak gayrimenkul satışlarını artırmanın daha güvenli, daha hızlı ve daha güvenilir bir yolunu yarattık."
        }
      },
      ar: {
        translations: {
          title: "الذي نفعله",
          description:"Cubedots هي شركة proptech تهدف إلى إحداث ثورة في مبيعات العقارات والتسويق والإدارة. من خلال بناء جسر بين شركائنا وكبار المطورين ، أنشأنا طريقة أكثر أمانًا وسرعة وموثوقية لزيادة مبيعات العقارات."
        }
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
