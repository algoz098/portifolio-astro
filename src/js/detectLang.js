export default function detectLang(Astro) {
  const validLangs = ['pt-BR', 'EN'];
  if (Astro.params.lang && validLangs.includes(Astro.params.lang)) {
    return null;
  }

  let result = 'EN';
  const langHeader = Object.fromEntries(Astro.request.headers)['accept-language'];

  for (let index = 0; index < validLangs.length; index++) {
    const valid = validLangs[index];
    if (langHeader.includes(valid)) result = valid;
  }

  console.log(`redirecting to ${result}`);
  return Astro.redirect(`/${result}`);
}
