import { readable, writable } from "svelte/store";

export const email = writable("");
export const isLoading = writable(false);
export const isError = writable(false);
export const isInvalid = writable(false);

const logosBase = "/img/logos";

export const logosFooter = readable({
  sat: `${logosBase}/sat.png`,
  caaarem: `${logosBase}/caaarem.png`,
  canadianBeef: `${logosBase}/canadian-beef.png`,
  usaPoultryEggs: `${logosBase}/usa-poultry-eggs.png`,
  usaMeat: `${logosBase}/us-meat.png`,
  senasica: `${logosBase}/senasica.png`,
  canada: `${logosBase}/canada.png`,
  usda: `${logosBase}/usda.png`,
  comecarne: `${logosBase}/comecarne.png`,
});

export const logosEvento = readable({
  seminario: `${logosBase}/seminario.png`,
});
