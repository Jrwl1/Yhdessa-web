const courses = {
  feeding: [
    { name: "SOS Approach to Feeding", lang: "en" },
    { name: "Mitä vikaa syömisessä?", lang: "fi" },
    { name: "Aistisäätely ja lasten syömisvaikeudet", lang: "fi" },
    { name: "Sensoriset pulmat syömishaasteiden taustalla", lang: "fi" }
  ],
  interaction: [
    { name: "PRT", lang: "fi" },
    { name: "Näin tuet leikki-ikäisten ja pienten koululaisten sosiaalisen kommunikaation taitoja", lang: "fi" }
  ],
  speechMotor: [
    { name: "OPT 1", lang: "fi" },
    { name: "Introduction to Childhood Apraxia of Speech", lang: "en" },
    { name: "Havannoi, arvioi ja kuntouta epäselvä puhe", lang: "fi" },
    { name: "Jaw Stability and Speech Clarity", lang: "en" },
    { name: "Lasten suunalueen sensomotoriset pulmat ja niiden kuntoutus", lang: "fi" }
  ],
  multilingual: [
    { name: "Monikielisten lasten kuntoutus ja vanhempien ohjaus", lang: "fi" },
    { name: "Monikulttuuriset asiakkaat terapiassa", lang: "fi" }
  ],
  language: [
    { name: "Puheen ymmärtämisen kuntoutus lapsilla ja nuorilla", lang: "fi" },
    { name: "Språkstörning och språkliga svårigheter hos barn", lang: "sv" },
    { name: "Lasten puheen kuntoutuksen prosesseja", lang: "fi" },
    { name: "Luetaanko – kirjojen hyödyntäminen puheterapiassa", lang: "fi" }
  ],
  aac: [
    { name: "Kipinää ja käytännön ideoita kuvakommunikointiin", lang: "fi" },
    { name: "Ytimessä monipuolista kommunikointia ydinsanaston avulla", lang: "fi" },
    { name: "Kuvat kielihäiriöisen lapsen kuntoutuksessa\u00a0\u2011verkkokoulutus", lang: "fi" }
  ],
  play: [
    { name: "Iloa ja osallisuutta – Leikkisyysteoria ja kielenkäyttötaidot lasten terapiassa", lang: "fi" }
  ],
  emotions: [
    { name: "Tunne- ja turvataidot lasten ja nuorten kuntoutuksessa", lang: "fi" }
  ],
  community: [
    { name: "Ohjaaminen ja muutosmotivaation herättely terapiatyössä", lang: "fi" }
  ],
  adultNeuro: [
    { name: "Aikuisneurologisen puheterapian vaikuttavuus", lang: "fi" },
    { name: "Osallisuuden vahvistaminen: SCA-menetelmän hyödyntäminen aikuisneurologisissa puheterapiaryhmissä", lang: "fi" },
    { name: "Nordic Aphasia Conference", lang: "en" }
  ]
};

const translations = {
  fi: {
    brand: "Puheterapiapalvelut Yhdessä",
    notFound: { heading: "Sivua ei löytynyt" },
    ui: { skipToContent: "Siirry sisältöön", navigation: "Päävalikko", language: "Kieli" },
    nav: {
      home: "Etusivu",
      about: "Tietoa minusta",
      contact: "Ota yhteyttä"
    },
    home: {
      title: "Puheterapiaa Turussa ja lähialueilla",
      description:
        "Tarjoan puheterapiaa Kelan vaativan lääkinnällisen kuntoutuksen sopimuksella. Pääsääntöisesti työskentelen lasten ja nuorten kanssa, mutta otan vastaan myös aikuisasiakkaita. Toteutan puheterapiaa myös hyvinvointialueen sopimuksella ja minulle voi hakeutua myös vakuutusyhtiön lähetteellä tai itsemaksavana asiakkaana.",
      cta: "Ota yhteyttä",
      servicesTitle: "Osaamisalueeni",
      servicesIntro:
        "Erityisosaamiseeni kuuluu vuorovaikutus- ja syömistaitojen kuntoutus, puhemotorinen kuntoutus sekä kehityksellisen kielihäiriön kuntoutus. Minulla on kokemusta myös monikielisten lasten kuntoutuksesta. Ohjaan mielelläni myös asiakkaan lähiympäristöä AAC-keinojen käyttöönottamisessa.",
      coursesLabel: "Käydyt koulutukset",
      services: [
        { title: "Syömistaitojen kuntoutus", courses: courses.feeding },
        { title: "Vuorovaikutustaitojen kuntoutus", courses: courses.interaction },
        { title: "Puhemotorinen kuntoutus", courses: courses.speechMotor },
        { title: "Monikielisen lapsen puheterapia", courses: courses.multilingual },
        { title: "Kehityksellisen kielihäiriön kuntoutus", courses: courses.language },
        { title: "AAC-keinojen käyttöönotto ja ohjaus (puhetta tukevat ja korvaavat kommunikointikeinot)", courses: courses.aac },
        { title: "Leikkitaitojen kuntoutus", courses: courses.play },
        { title: "Tunnetaitojen kuntoutus", courses: courses.emotions },
        { title: "Lähiyhteisön ohjaaminen", courses: courses.community },
        { title: "Aikuisneurologinen kuntoutus", courses: courses.adultNeuro }
      ],
      languagesTitle: "Palvelukielet",
      languagesText:
        "Tarjoan puheterapiaa suomeksi ja ruotsiksi. Ohjaan tarvittaessa myös lähiympäristöä englanniksi.",
      finalCtaTitle: "Ota yhteyttä"
    },
    about: {
      heading: "Tietoa minusta",
      portraitCaption: "Frida Lindström, puheterapeutti",
      content:
        "Valmistuin puheterapeutiksi Åbo Akademista vuonna 2017. Olen työskennellyt yksityisellä sektorilla kuntouttavana puheterapeuttina.",
      experience: [
        "Toteutan mielelläni puheterapiaa myös asiakkaan lähiympäristössä.",
        "Erityisosaamiseeni kuuluu vuorovaikutus- ja syömistaitojen kuntoutus ja lähiympäristön ohjaus sekä oraalimotoristen taitojen kuntoutus (epäselvä puhe, äännevirheet). Minulla on kokemusta myös kehityksellisestä kielihäiriöstä ja AAC-keinojen harjoittelusta ja käyttöönottamisesta."
      ]
    },
    contact: {
      heading: "Ota yhteyttä",
      description:
        "Voit ottaa minuun yhteyttä jo ennen Kelan päätöstä.",
      emailLabel: "Sähköposti",
      phoneLabel: "Puhelin ja tekstiviesti",
      notes: [
        "Voit ottaa minuun yhteyttä jo ennen Kelan päätöstä."
      ]
    },
    privacy: { heading: "Tietosuojaseloste" },
    footer: {
      businessId: "Y-tunnus 3506989-2",
      kelaProvider: "Tarjoamani Kelan vaativan lääkinnällisen kuntoutuksen sopimuksen palveluntuottaja on Puheterapiapalvelut Yhdessä."
    }
  },
  sv: {
    brand: "Puheterapiapalvelut Yhdessä",
    notFound: { heading: "Sidan kunde inte hittas" },
    ui: { skipToContent: "Hoppa till innehåll", navigation: "Huvudmeny", language: "Språk" },
    nav: {
      home: "Startsida",
      about: "Om mig",
      contact: "Ta kontakt"
    },
    home: {
      title: "Talterapi i Åbo med omnejd",
      description:
        "Jag erbjuder talterapi med avtal inom FPA:s krävande medicinska rehabilitering. Jag arbetar huvudsakligen med barn och unga, men tar också emot vuxna klienter. Jag ger talterapi även med avtal med välfärdsområdet, och man kan också söka sig till mig med remiss från ett försäkringsbolag eller som självbetalande klient.",
      cta: "Ta kontakt",
      servicesTitle: "Mina kompetensområden",
      servicesIntro:
        "Min specialkompetens omfattar rehabilitering av samspels- och ätfärdigheter, talmotorisk rehabilitering samt rehabilitering vid utvecklingsrelaterad språkstörning. Jag har också erfarenhet av rehabilitering av flerspråkiga barn. Jag handleder gärna klientens näromgivning i att ta i bruk AKK.",
      coursesLabel: "Genomgångna utbildningar",
      services: [
        { title: "Rehabilitering av ätfärdigheter", courses: courses.feeding },
        { title: "Rehabilitering av samspelsfärdigheter", courses: courses.interaction },
        { title: "Talmotorisk rehabilitering", courses: courses.speechMotor },
        { title: "Talterapi för flerspråkiga barn", courses: courses.multilingual },
        { title: "Rehabilitering vid utvecklingsrelaterad språkstörning", courses: courses.language },
        { title: "Införande av och handledning i AKK (alternativ och kompletterande kommunikation)", courses: courses.aac },
        { title: "Rehabilitering av lekfärdigheter", courses: courses.play },
        { title: "Rehabilitering av emotionella färdigheter", courses: courses.emotions },
        { title: "Handledning av näromgivningen", courses: courses.community },
        { title: "Neurologisk rehabilitering för vuxna", courses: courses.adultNeuro }
      ],
      languagesTitle: "Servicespråk",
      languagesText:
        "Jag erbjuder talterapi på svenska och finska. Jag handleder även näromgivningen på engelska vid behov.",
      finalCtaTitle: "Ta kontakt"
    },
    about: {
      heading: "Om mig",
      portraitCaption: "Frida Lindström, talterapeut",
      content:
        "Jag utexaminerades som talterapeut från Åbo Akademi 2017. Jag har arbetat inom den privata sektorn som rehabiliterande talterapeut.",
      experience: [
        "Jag ger gärna talterapi även i klientens näromgivning.",
        "Min specialkompetens omfattar rehabilitering av samspels- och ätfärdigheter och handledning av näromgivningen samt rehabilitering av oralmotoriska färdigheter (otydligt tal, uttalsfel). Jag har också erfarenhet av utvecklingsrelaterad språkstörning och av att öva på och ta i bruk AKK."
      ]
    },
    contact: {
      heading: "Ta kontakt",
      description:
        "Det går bra att kontakta mig redan före man har beslut från FPA.",
      emailLabel: "E-post",
      phoneLabel: "Telefon och sms",
      notes: [
        "Det går bra att kontakta mig redan före man har beslut från FPA."
      ]
    },
    privacy: { heading: "Tietosuojaseloste" },
    footer: {
      businessId: "FO-nummer 3506989-2",
      kelaProvider: "Tjänsteproducenten för avtalet om FPA:s krävande medicinska rehabilitering som jag erbjuder är Puheterapiapalvelut Yhdessä."
    }
  },
  en: {
    brand: "Puheterapiapalvelut Yhdessä",
    notFound: { heading: "Page not found" },
    ui: { skipToContent: "Skip to content", navigation: "Main navigation", language: "Language" },
    nav: {
      home: "Home",
      about: "About me",
      contact: "Contact"
    },
    home: {
      title: "Speech therapy in Turku and surrounding areas",
      description:
        "I provide speech therapy under a contract with Kela for intensive medical rehabilitation. I work mainly with children and young people, but I also welcome adult clients. I also provide speech therapy under a contract with the wellbeing services county, and you can come to me with a referral from an insurance company or as a self-paying client.",
      cta: "Contact me",
      servicesTitle: "My areas of expertise",
      servicesIntro:
        "My special expertise covers therapy for interaction and feeding skills, speech motor therapy and therapy for developmental language disorder. I also have experience in therapy for multilingual children. I am happy to guide the people around the client in introducing AAC.",
      coursesLabel: "Completed training",
      services: [
        { title: "Feeding skills therapy", courses: courses.feeding },
        { title: "Rehabilitation of interaction skills", courses: courses.interaction },
        { title: "Speech motor therapy", courses: courses.speechMotor },
        { title: "Speech therapy for multilingual children", courses: courses.multilingual },
        { title: "Therapy for developmental language disorder", courses: courses.language },
        { title: "Introducing and guiding AAC (augmentative and alternative communication)", courses: courses.aac },
        { title: "Play skills therapy", courses: courses.play },
        { title: "Emotional skills therapy", courses: courses.emotions },
        { title: "Guiding the people around the client", courses: courses.community },
        { title: "Adult neurological rehabilitation", courses: courses.adultNeuro }
      ],
      languagesTitle: "Service languages",
      languagesText:
        "I offer speech therapy in Finnish and Swedish. When needed, I also guide the people around the client in English.",
      finalCtaTitle: "Contact me"
    },
    about: {
      heading: "About me",
      portraitCaption: "Frida Lindström, speech therapist",
      content:
        "I graduated as a speech therapist from Åbo Akademi University in 2017. I have worked in the private sector as a rehabilitation speech therapist.",
      experience: [
        "I am also happy to provide speech therapy in the client’s everyday environment.",
        "My special expertise covers therapy for interaction and feeding skills and guiding the people around the client, as well as therapy for oral motor skills (unclear speech, speech sound errors). I also have experience with developmental language disorder and with practising and introducing AAC."
      ]
    },
    contact: {
      heading: "Contact me",
      description:
        "You can contact me before you have a decision from Kela.",
      emailLabel: "Email",
      phoneLabel: "Phone and text message",
      notes: [
        "You can contact me before you have a decision from Kela."
      ]
    },
    privacy: { heading: "Tietosuojaseloste" },
    footer: {
      businessId: "Business ID 3506989-2",
      kelaProvider: "The service provider under the Kela contract for the intensive medical rehabilitation I offer is Puheterapiapalvelut Yhdessä."
    }
  }
};

export default translations;
