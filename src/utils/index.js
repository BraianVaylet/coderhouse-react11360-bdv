export const setNavigatorLanguage = () => {
  const value = JSON.parse(window.localStorage.getItem("language"))
  return value !== null
    ? value
    : navigator.language.includes("es")
    ? "es"
    : "en"
}
