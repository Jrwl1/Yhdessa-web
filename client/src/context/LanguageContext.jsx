import { useLocation } from "react-router-dom";
import { matchRoute } from "../routes";

// The URL is the only source of page and language, so prerendered HTML and the browser always agree.
export function useRoute() {
  return matchRoute(useLocation().pathname);
}

export function useLanguage() {
  return { language: useRoute().lang };
}
