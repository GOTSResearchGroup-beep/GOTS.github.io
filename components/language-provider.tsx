"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "fr" | "es" | "en"

type TranslationKey =
  | "nav.home"
  | "nav.news"
  | "nav.publications"
  | "nav.team"
  | "hero.subtitle"
  | "hero.viewPublications"
  | "hero.contactUs"
  | "hero.researchAreas"
  | "news.title"
  | "news.highlight"
  | "news.description"
  | "news.readingTime"
  | "news.featured"
  | "news.viewAll"
  | "publications.title"
  | "publications.highlight"
  | "publications.description"
  | "publications.viewMore"
  | "publications.viewAll"
  | "contact.title"
  | "contact.subtitle"
  | "contact.infoTitle"
  | "contact.infoDescription"
  | "contact.address"
  | "contact.phone"
  | "contact.socialTitle"
  | "contact.socialDescription"
  | "contact.hoursTitle"
  | "contact.weekdays"
  | "contact.weekend"
  | "contact.closed"
  | "contact.connectTitle"
  | "contact.connectDescription"
  | "contact.sendEmail"
  | "contact.findUs"
  | "contact.viewOnMaps"
  | "contact.projectTitle"
  | "contact.projectDescription"
  | "contact.proposeCollab"
  | "contact.viewWork"
  | "footer.quickLinks"
  | "footer.followUs"
  | "footer.rights"

const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.news": "Actualites",
    "nav.publications": "Publications",
    "nav.team": "Equipe",
    "hero.subtitle": "Groupe d'Optique et de Traitement du Signal (GOTS)",
    "hero.viewPublications": "Voir les publications",
    "hero.contactUs": "Nous contacter",
    "hero.researchAreas": "Axes de recherche",
    "news.title": "Actualites",
    "news.highlight": "A la une",
    "news.description":
      "Restez informe des dernieres nouveautes et des realisations les plus importantes de notre groupe de recherche.",
    "news.readingTime": "de lecture",
    "news.featured": "A la une",
    "news.viewAll": "Voir toutes les actualites",
    "publications.title": "Publications",
    "publications.highlight": "A la une",
    "publications.description":
      "Explorez nos contributions scientifiques les plus pertinentes dans des revues et conferences internationales.",
    "publications.viewMore": "Voir plus",
    "publications.viewAll": "Voir toutes les publications",
    "contact.title": "Contact",
    "contact.subtitle":
      "Interesse par une collaboration ou envie d'en savoir plus sur notre travail ? Contactez-nous.",
    "contact.infoTitle": "Informations de contact",
    "contact.infoDescription": "Nous sommes situes a l'Universite Industrielle de Santander.",
    "contact.address": "Adresse",
    "contact.phone": "Telephone",
    "contact.socialTitle": "Suivez-nous sur les reseaux",
    "contact.socialDescription": "Restez a jour avec nos dernieres recherches.",
    "contact.hoursTitle": "Horaires d'ouverture",
    "contact.weekdays": "Lun - Ven",
    "contact.weekend": "Sam - Dim",
    "contact.closed": "Ferme",
    "contact.connectTitle": "Connectez-vous avec nous",
    "contact.connectDescription": "Moyens directs de nous contacter et de nous rendre visite.",
    "contact.sendEmail": "Envoyer un email",
    "contact.findUs": "Nous localiser",
    "contact.viewOnMaps": "Voir sur Google Maps",
    "contact.projectTitle": "Vous avez un projet en tete ?",
    "contact.projectDescription":
      "Nous sommes interesses par les collaborations academiques, les projets de recherche et les opportunites d'echange scientifique.",
    "contact.proposeCollab": "Proposer une collaboration",
    "contact.viewWork": "Voir notre travail",
    "footer.quickLinks": "Liens rapides",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits reserves.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.news": "Noticias",
    "nav.publications": "Publicaciones",
    "nav.team": "Equipo",
    "hero.subtitle": "Grupo de Optica y Tratamiento de Senales (GOTS)",
    "hero.viewPublications": "Ver Publicaciones",
    "hero.contactUs": "Contactanos",
    "hero.researchAreas": "Ramas de investigacion",
    "news.title": "Noticias",
    "news.highlight": "Destacadas",
    "news.description":
      "Mantente al dia con las ultimas novedades y logros mas importantes de nuestro grupo de investigacion.",
    "news.readingTime": "de lectura",
    "news.featured": "Destacada",
    "news.viewAll": "Ver Todas las Noticias",
    "publications.title": "Publicaciones",
    "publications.highlight": "Destacadas",
    "publications.description":
      "Explora nuestras contribuciones cientificas mas relevantes en revistas y conferencias internacionales.",
    "publications.viewMore": "Ver mas",
    "publications.viewAll": "Ver Todas las Publicaciones",
    "contact.title": "Contacto",
    "contact.subtitle": "Interesado en colaborar o conocer mas sobre nuestro trabajo? Contactanos.",
    "contact.infoTitle": "Informacion de Contacto",
    "contact.infoDescription": "Estamos ubicados en la Universidad Industrial de Santander.",
    "contact.address": "Direccion",
    "contact.phone": "Telefono",
    "contact.socialTitle": "Siguenos en Redes Sociales",
    "contact.socialDescription": "Mantente al dia con nuestras ultimas investigaciones.",
    "contact.hoursTitle": "Horario de Atencion",
    "contact.weekdays": "Lun - Vie",
    "contact.weekend": "Sab - Dom",
    "contact.closed": "Cerrado",
    "contact.connectTitle": "Conecta con Nosotros",
    "contact.connectDescription": "Formas directas de contactarnos y visitarnos.",
    "contact.sendEmail": "Enviar un Email",
    "contact.findUs": "Ubicanos",
    "contact.viewOnMaps": "Ver en Google Maps",
    "contact.projectTitle": "Tienes un proyecto en mente?",
    "contact.projectDescription":
      "Estamos interesados en colaboraciones academicas, proyectos de investigacion y oportunidades de intercambio cientifico.",
    "contact.proposeCollab": "Proponer Colaboracion",
    "contact.viewWork": "Ver Nuestro Trabajo",
    "footer.quickLinks": "Enlaces Rapidos",
    "footer.followUs": "Siguenos",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.news": "News",
    "nav.publications": "Publications",
    "nav.team": "Team",
    "hero.subtitle": "Optics and Signal Processing Group (GOTS)",
    "hero.viewPublications": "View Publications",
    "hero.contactUs": "Contact Us",
    "hero.researchAreas": "Research Areas",
    "news.title": "News",
    "news.highlight": "Featured",
    "news.description":
      "Stay up to date with the latest milestones and key achievements from our research group.",
    "news.readingTime": "read",
    "news.featured": "Featured",
    "news.viewAll": "View All News",
    "publications.title": "Publications",
    "publications.highlight": "Featured",
    "publications.description":
      "Explore our most relevant scientific contributions in international journals and conferences.",
    "publications.viewMore": "View more",
    "publications.viewAll": "View All Publications",
    "contact.title": "Contact",
    "contact.subtitle":
      "Interested in collaborating or learning more about our work? Contact us.",
    "contact.infoTitle": "Contact Information",
    "contact.infoDescription": "We are located at Universidad Industrial de Santander.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.socialTitle": "Follow us on Social Media",
    "contact.socialDescription": "Stay updated with our latest research.",
    "contact.hoursTitle": "Office Hours",
    "contact.weekdays": "Mon - Fri",
    "contact.weekend": "Sat - Sun",
    "contact.closed": "Closed",
    "contact.connectTitle": "Connect with Us",
    "contact.connectDescription": "Direct ways to contact us and visit us.",
    "contact.sendEmail": "Send an Email",
    "contact.findUs": "Find Us",
    "contact.viewOnMaps": "View on Google Maps",
    "contact.projectTitle": "Do you have a project in mind?",
    "contact.projectDescription":
      "We are interested in academic collaborations, research projects, and scientific exchange opportunities.",
    "contact.proposeCollab": "Propose Collaboration",
    "contact.viewWork": "View Our Work",
    "footer.quickLinks": "Quick Links",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)
const STORAGE_KEY = "gots_language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (savedLanguage === "fr" || savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }
  return context
}
