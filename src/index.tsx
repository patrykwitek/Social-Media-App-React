import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/roots/App/App';
import { BrowserRouter } from "react-router-dom";
import global_en from "./translations/en/global.json";
import global_pl from "./translations/pl/global.json";
import global_ukr from "./translations/ukr/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    pl: {
      global: global_pl
    },
    ukr: {
      global: global_ukr
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)