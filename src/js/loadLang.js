const langsAllowed = ['pt-BR', 'EN'];
export let localeName = 'EN';
export let locale;
export default async function(langRecv) {
  let lang = 'EN';
  if (langsAllowed.includes(langRecv)) lang = langRecv;
  localeName = lang;

  const data  = await import(`../locales/${lang}.js` /* @vite-ignore */);
  locale = data.default;
  return locale;
}
