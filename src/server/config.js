import lolClient from './LolApi';

async function getConfig() {
  const serverData = await lolClient.getServer();

  return {
    defaultLang: serverData.l.replace('_', '-'),
    cdnUrl: serverData.cdn,
  };
}

export default getConfig;
