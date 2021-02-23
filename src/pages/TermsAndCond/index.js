import React from "react"
import { useTransaltion } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import TermsAndCondTemplate from "components/_templates/TermsAndCondTemplate"

/**
 * TermsAndCond Page
 * @component
 * @author Braian D. Vaylet
 * @description Pagina de terminos y condiciones
 */
const TermsAndCond = () => {
  const [t] = useTransaltion("global")
  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.termsAndConditions")}
        description={t("HelmetSEO.description.termsAndConditions")}
      />
      <TermsAndCondTemplate />
    </>
  )
}

export default TermsAndCond
