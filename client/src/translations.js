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
        "Työskentelen pääsääntöisesti lasten ja nuorten parissa, mutta otan vastaan myös aikuisasiakkaita. Toteutan puheterapiaa Kelan vaativan lääkinnällisen kuntoutuksen sopimuksella sekä hyvinvointialueen sopimuksella.",
      cta: "Ota yhteyttä",
      servicesTitle: "Osaamisalueeni",
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
      therapyTitle: "Työskentelytapani",
      languagesTitle: "Palvelukielet",
      languagesText:
        "Tarjoan puheterapiaa suomeksi ja ruotsiksi. Ohjaan tarvittaessa myös lähiympäristöä englanniksi.",
      finalCtaTitle: "Ota yhteyttä"
    },
    about: {
      heading: "Tietoa minusta",
      portraitCaption: "Frida Lindström, puheterapeutti",
      content:
        "Toimin puheterapeuttina Turun seudulla ja toteutan kuntoutusta pääosin Kelan vaativan lääkinnällisen kuntoutuksen lapsiasiakkaille. Työskentelen pääasiassa lasten ja nuorten parissa, mutta otan mielelläni vastaan myös aikuisasiakkaita.",
      experience: [
        "Minulla on kokemusta muun muassa varhaisten vuorovaikutus- ja kommunikointitaitojen kuntoutuksesta sekä autismikirjon asiakkaiden kuntoutuksesta.",
        "Lisäksi kuntoutan puhemotorisia haasteita ja syömiseen liittyviä vaikeuksia.",
        "Kokemusta minulla on myös kehityksellisen kielihäiriön kuntoutuksesta sekä puhetta tukevien ja korvaavien kommunikointikeinojen (AAC) käytöstä ja niiden ohjauksesta."
      ],
      approach:
        "Kuntoutuksessa huomioin asiakkaan omat tarpeet, toiveet, vahvuudet ja kiinnostuksenkohteet. Tavoitteena on, että opitut taidot tukevat mahdollisimman hyvin asiakkaan arkea ja osallistumista hänelle tärkeissä tilanteissa."
    },
    contact: {
      heading: "Ota yhteyttä",
      description:
        "Voit ottaa minuun yhteyttä jo ennen Kelan päätöstä.",
      emailLabel: "Sähköposti",
      phoneLabel: "Puhelin ja tekstiviesti",
      notes: [
        "Terapia toteutuu asiakkaan lähiympäristössä tai vastaanotolla Turun keskustassa.",
        "Voit ottaa minuun yhteyttä jo ennen Kelan päätöstä."
      ]
    },
    footer: {
      businessId: "Y-tunnus 3506989-2",
      kelaProvider: "Tarjoamani Kelan vaativan lääkinnällisen kuntoutuksen sopimuksen palveluntuottaja on Puheterapiapalvelut Yhdessä."
    }
  },
  sv: {
    brand: "Talterapitjänster Yhdessä",
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
        "Jag arbetar huvudsakligen med barn och unga, men tar också emot vuxna klienter. Jag ger talterapi med avtal inom FPA:s krävande medicinska rehabilitering och med välfärdsområdet.",
      cta: "Ta kontakt",
      servicesTitle: "Mina kompetensområden",
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
      therapyTitle: "Mitt arbetssätt",
      languagesTitle: "Servicespråk",
      languagesText:
        "Jag erbjuder talterapi på svenska och finska. Jag handleder även näromgivningen på engelska vid behov.",
      finalCtaTitle: "Ta kontakt"
    },
    about: {
      heading: "Om mig",
      portraitCaption: "Frida Lindström, talterapeut",
      content:
        "Jag arbetar som talterapeut i Åboregionen och erbjuder rehabilitering främst för barn inom FPA:s krävande medicinska rehabilitering. Jag arbetar huvudsakligen med barn och unga, men tar gärna emot även vuxna klienter.",
      experience: [
        "Jag har erfarenhet av bland annat rehabilitering av tidiga samspels- och kommunikationsfärdigheter samt rehabilitering av klienter inom autismspektrumet.",
        "Jag arbetar också med talmotoriska svårigheter och ätsvårigheter.",
        "Jag har även erfarenhet av rehabilitering vid utvecklingsrelaterad språkstörning samt av användning av och handledning i alternativ och kompletterande kommunikation (AKK)."
      ],
      approach:
        "I rehabiliteringen tar jag hänsyn till klientens egna behov, önskemål, styrkor och intressen. Målet är att de inlärda färdigheterna ska stödja klientens vardag och deltagande i situationer som är viktiga för hen så väl som möjligt."
    },
    contact: {
      heading: "Ta kontakt",
      description:
        "Det går bra att kontakta mig redan före man har beslut från FPA.",
      emailLabel: "E-post",
      phoneLabel: "Telefon och sms",
      notes: [
        "Terapin sker i klientens näromgivning eller på mottagningen i Åbo centrum.",
        "Det går bra att kontakta mig redan före man har beslut från FPA."
      ]
    },
    footer: {
      businessId: "FO-nummer 3506989-2",
      kelaProvider: "Tjänsteproducenten för avtalet om FPA:s krävande medicinska rehabilitering som jag erbjuder är Puheterapiapalvelut Yhdessä."
    }
  },
  en: {
    brand: "Yhdessä Speech Therapy Services",
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
        "I work mainly with children and young people, but I also welcome adult clients. I provide speech therapy under contracts with Kela for intensive medical rehabilitation and with the wellbeing services county.",
      cta: "Contact me",
      servicesTitle: "My areas of expertise",
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
      therapyTitle: "My approach",
      languagesTitle: "Service languages",
      languagesText:
        "I offer speech therapy in Finnish and Swedish. When needed, I also guide the people around the client in English.",
      finalCtaTitle: "Contact me"
    },
    about: {
      heading: "About me",
      portraitCaption: "Frida Lindström, speech therapist",
      content:
        "I work as a speech therapist in the Turku region and provide rehabilitation mainly for children receiving Kela’s intensive medical rehabilitation. I work primarily with children and young people, but I am also happy to welcome adult clients.",
      experience: [
        "My experience includes rehabilitation of early interaction and communication skills and working with clients on the autism spectrum.",
        "I also work with speech motor challenges and feeding difficulties.",
        "I also have experience in rehabilitation for developmental language disorder and in the use of augmentative and alternative communication (AAC) methods and guidance in their use."
      ],
      approach:
        "In rehabilitation, I take into account the client’s own needs, wishes, strengths and interests. The aim is for the skills learned to support the client’s everyday life and participation in situations that matter to them as well as possible."
    },
    contact: {
      heading: "Contact me",
      description:
        "You can contact me before you have a decision from Kela.",
      emailLabel: "Email",
      phoneLabel: "Phone and text message",
      notes: [
        "Therapy takes place in the client’s everyday environment or at my practice in central Turku.",
        "You can contact me before you have a decision from Kela."
      ]
    },
    footer: {
      businessId: "Business ID 3506989-2",
      kelaProvider: "The service provider under the Kela contract for the intensive medical rehabilitation I offer is Puheterapiapalvelut Yhdessä."
    }
  }
};

export default translations;
