import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import Button from '@mui/material/Button';

const Language = () => {

  const langs = {
    fr: "FR",
    en: "EN",
  }

  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          /* eslint-disable array-callback-return */
          languages.map(language => {
            if (language !== currentLocale) {
              return (
                <Button variant="outlined" key={language} onClick={() => changeLocale(language)}>
                  {langs[language]}
                </Button>
              )
            }
          })
        }
      </IntlContextConsumer>
    </>
  )
}

export default Language
