import i18next from "i18next"
import lngES from "./es/global.json"
import lngEN from "./en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: lngES,
    },
    en: {
      global: lngEN,
    },
  },
})

export default i18next
