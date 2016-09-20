import lolClient from './LolApi';

async function getConfig() {
  const serverData = await lolClient.getServer();
  const { data: languageStrings } = await lolClient.getLanguageStrings({ locale: serverData.l });

  return {
    languageStrings,
    defaultLang: serverData.l.replace('_', '-'),
    cdnUrl: serverData.cdn,
    versions: serverData.n,
  };
}

export default getConfig;
