export default function detectLang(Astro) {
  let result = 'EN';
  const langHeader = Object.fromEntries(Astro.request.headers)['accept-language'];
  const validLangs = ['pt-BR', 'EN'];

  for (let index = 0; index < validLangs.length; index++) {
    const valid = validLangs[index];
    if (langHeader.includes(valid)) result = valid;
  }

  console.log(`redirecting to ${result}`);
  return Astro.redirect(`/${result}/batata`);
}
