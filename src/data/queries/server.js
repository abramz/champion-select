import LolApi from '../../LolApi';
import ServerType from '../types/ServerType';

const server = {
  type: ServerType,
  async resolve() {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      return await lolApi.getServer();
    } catch (error) {
      console.log(error);
      throw new Error('Unable to retrieve server.');
    }
  },
};

export default server;
