import React from "react";

// Frida's privacy notice, as supplied on 2026-11-02, with language errors corrected. It exists only in Finnish,
// so the page keeps lang="fi" in every site language.
export default function Privacy() {
  return (
    <section className="page-width section-space privacy-page" lang="fi">
      <h1>Tietosuojaseloste</h1>
      <p className="lead">
        Tämä asiakirja sisältää EU:n yleisen tietosuoja-asetuksen (2016/679) mukaisesti rekisteröidylle
        toimitettavat tiedot.
      </p>

      <h2>1. Rekisterinpitäjän yhteystiedot</h2>
      <p>
        Rekisterinpitäjä on: Puheterapiapalvelut Yhdessä<br />
        Y-tunnus 3506989-2<br />
        Käsityöläiskatu 4a 302, 20100 Turku, 045 847 1446<br />
        www.puheterapiayhdessa.fi
      </p>
      <p>Tietosuojavastaavan yhteystiedot:</p>
      <p>
        Frida Lindström<br />
        <a className="text-link" href="mailto:puheterapiayhdessa@gmail.com">puheterapiayhdessa@gmail.com</a>, 045 847 1446
      </p>

      <h2>2. Henkilötietojen käsittelyn tarkoitus ja käsittelyn peruste sekä vastaanottoryhmät</h2>
      <p>
        Henkilötietojen käsittelyn peruste ja tarkoitus on sosiaali- ja terveydenhuollon asiakastietojen
        käsittelystä annetun lain (ns. asiakastietolaki, laki 703/2023) edellyttämän potilas- ja
        asiakasrekisterin ylläpitäminen: EU:n yleisen tietosuoja-asetuksen 6 artiklan 1 c) alakohta
        (käsittely on tarpeen rekisterinpitäjän lakisääteisen velvoitteen noudattamiseksi). Muiden
        henkilötietojen osalta käsittelyperuste on asetuksen 6 artiklan 1 b) alakohta (käsittely on tarpeen
        sopimuksen täytäntöönpanemiseksi).
      </p>
      <p>
        Potilasrekisteriin kuuluvat mm. potilaan nimi, henkilötunnus, kotiosoite, muut yhteystiedot
        sekä kaikki hoidon järjestämisessä ja toteuttamisessa käytettävät, laaditut tai saapuneet
        asiakirjat taikka tekniset tallenteet, jotka sisältävät asiakkaan terveydentilaa koskevia tai
        muita henkilökohtaisia tietoja. Näin kerättyjä tietoja käytetään terveydenhuollon palveluiden
        tuottamiseen ja siihen kiinteästi liittyviin toimintoihin. Asiakkaan yhteystietoja voidaan käyttää
        lain sallimalla tavalla myös palveluiden markkinointiin. Sähköinen suoramarkkinointi
        kuluttaja-asiakkaalle edellyttää erillistä suostumusta.
      </p>
      <p>
        Rekisterinpitäjä voi käyttää potilastietojen käsittelyssä alihankkijoita, kuten sähköisiä
        potilastietojärjestelmiä tuottavia yrityksiä tai muita terveydenhuollon palveluntuottajia. Tällöin
        sopimuskumppanin kanssa laaditaan EU:n tietosuoja-asetuksen 28 artiklan ja yllä mainitun
        asiakastietolain edellyttämä sopimus henkilötietojen käsittelystä.
      </p>
      <p>
        Potilastiedot ovat lakisääteisen salassapitovelvollisuuden piirissä (asiakastietolaki 4 § ja 5 § sekä
        rikoslain 38 luvun 1 ja 2 §). Potilastietoja ei luovuteta sivullisille ilman lakiin perustuvaa syytä
        tai asiakkaan nimenomaista ja erikseen saatua suostumusta. Sivullisella tarkoitetaan muita kuin
        asianomaisessa toimintayksikössä tai sen toimeksiannosta potilaan hoitoon tai siihen liittyviin
        tehtäviin osallistuvia henkilöitä.
      </p>
      <p>
        Säännönmukaisesti asiakkaan henkilötietoja luovutetaan edellä mainittujen perusteiden
        täyttyessä seuraaville tahoille: asiakas, asiakkaan omaiset/huoltajat, maksavat tahot (esim.
        Kela, hyvinvointialueet, vakuutusyhtiöt), päiväkodit ja koulut, asiakkaan muut hoitavat tahot,
        Kanta, Diarium-potilasjärjestelmä.
      </p>

      <h2>3. Henkilötietojen säilytysaika</h2>
      <p>
        Potilastietoja säilytetään niin pitkään kuin yllä mainittu asiakastietolaki sekä sen säilytysliite
        edellyttävät. Pääsääntöisesti potilastietoja säilytetään asetuksen mukaisesti 12 vuotta potilaan
        kuolemasta, tai mikäli kuolemasta ei ole tietoa, 120 vuotta potilaan syntymästä.
      </p>

      <h2>4. Rekisteröidyn oikeudet</h2>
      <p>
        Rekisteröitynä sinulla on tietosuoja-asetuksen mukainen oikeus pyytää sinusta kerättyjä tietoja
        nähtäville sekä oikeus pyytää kyseisten tietojen oikaisemista, poistamista tai pyytää käsittelyn
        rajoittamista sekä vastustaa tietojen käsittelyä. Mikäli kyseessä on sähköisesti tuotettu tieto,
        jonka käsittely perustuu sopimukseen, on sinulla myös oikeus saada sinusta kerätyt
        automaattisesti käsitellyt tiedot siirretyksi sähköisesti järjestelmästä toiseen.
      </p>
      <p>
        Siltä osin kuin tietojen säilytys perustuu lakiin, ei rekisteröidyllä ole ehdotonta oikeutta vaatia
        potilastietoja poistettavaksi tai oikeutta vastustaa tai rajoittaa tietojen lakisääteistä käsittelyä
        tietosuoja-asetuksen sallimalla tavalla. Hoidon yhteydessä annettavat pakolliset tiedot on
        lueteltu yllä viitatun asiakastietolain 27 §:ssä.
      </p>

      <h2>5. Oikeus peruuttaa suostumus</h2>
      <p>
        Potilastietojen käsittely ei perustu rekisteröidyn suostumukseen, vaan on rekisterinpitäjän
        lakisääteinen velvollisuus. Milloin (muiden kuin lakisääteisten potilas-) tietojen käsittely
        perustuu suostumukseen, on sinulla rekisteröitynä oikeus peruuttaa tällainen suostumus
        milloin tahansa. Suostumuksen peruuttaminen ei vielä kuitenkaan lopeta henkilötietojen
        käsittelyä, mikäli käsittelylle on muu tietosuoja-asetuksen 6 artiklassa mainittu tai
        lainsäädännöllä säädetty peruste.
      </p>

      <h2>6. Oikeus tehdä valitus valvontaviranomaiselle</h2>
      <p>
        Rekisteröitynä sinulla on oikeus tehdä tietojesi käsittelystä valitus valvontaviranomaiselle.
        Toimivaltainen valvontaviranomainen Suomessa on tietosuojavaltuutetun toimisto{" "}
        <a className="text-link" href="https://tietosuoja.fi">www.tietosuoja.fi</a>
      </p>

      <h2>7. Henkilötietojen antaminen on palvelun suorittamisen lakisääteinen edellytys</h2>
      <p>
        Henkilötietojen (nimi, yhteystiedot, kotipaikka, henkilötunnus jne.) antaminen on
        terveydenhuollon palveluiden antamisen edellytys ja perustuu potilaan asemasta ja oikeuksista
        annettuun lakiin ja asetukseen. Potilastietojen tallentamisesta lakisääteiseen kansalliseen
        Kanta-arkistoon informoidaan yllä mainitun asiakastietolain edellyttämällä tavalla Kelan
        Kanta-palveluiden omilla materiaaleilla tai suullisesti. Annettu Kanta-informointi kirjataan aina
        suoraan Kanta-palveluihin erillään palveluntuottajan potilasrekisteristä.
      </p>

      <h2>8. Automaattinen päätöksenteko tai profilointi</h2>
      <p>
        Rekisterinpitäjän hallinnoimien henkilötietojen käsittelyyn ei liity automaattista
        päätöksentekoa tai profilointia.
      </p>

      <h2>9. Tietojen käyttötarkoituksen muutoksesta on ilmoitettava asiakkaalle</h2>
      <p>
        Jos rekisterinpitäjä aikoo käsitellä henkilötietoja edelleen muuhun tarkoitukseen kuin siihen,
        johon henkilötiedot alun perin kerättiin, on rekisterinpitäjän tietosuoja-asetuksen mukaisesti
        ilmoitettava rekisteröidylle ennen kyseistä jatkokäsittelyä tästä muusta tarkoituksesta ja
        annettava kaikki asiaankuuluvat lisätiedot tietosuoja-asetuksen mukaisesti.
      </p>
      <p>
        Tämän lisäksi on huomioitava, että lakisääteisten potilastietojen käyttötarkoituksen on
        muutoksen jälkeenkin oltava potilassalaisuutta koskevan lainsäädännön sallima.
      </p>
    </section>
  );
}
