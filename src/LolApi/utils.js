import fetch from '../core/fetch';
import { riot } from './constants';

export function stripApiKey(url) {
  return url.replace(/(\?*api_key=)([^&]+)(&*)/i, (match, p1, p2, p3, offset, str) => {
    if (match) {
      return [p1, p3].join('<REDACTED>');
    }

    return str;
  });
}

// I don't want to leak the API key to callers that aren't makeFetch
function makeUrl(route, locale, query) {
  const {
    apiKey,
    baseUrl,
    version,
    region,
  } = riot;

  let url = `${baseUrl}/${region}/${version}/${route}?api_key=${apiKey}`;

  if (locale) {
    url += `&locale=${locale}`;
  }

  if (query) {
    url += `&${query}`;
  }

  return url;
}

export async function makeFetch(route, locale, query) {
  let response;
  let data;

  const url = makeUrl(route, locale, query);

  try {
    response = await fetch(url);
  } catch (error) {
    error.message = stripApiKey(error.message);
    throw error;
  }

  try {
    data = await response.json();
  } catch (error) {
    error.message = stripApiKey(error.message);
    throw error;
  }

  if (!response.ok) {
    throw new Error(`Error: request to "${stripApiKey(url)}" failed with status: "${data.status.status_code}|${data.status.message}".`);
  }

  return data;
}
