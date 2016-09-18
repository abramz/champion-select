import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() { // eslint-disable-line react/prop-types
    const options = `["${['image', 'tags'].join('", "')}"]`;

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          champions(options: ${options}) {
            version
            data {
              key
              name
              image {
                group
                full
              }
              tags
            }
          }
        }`,
      }),
      credentials: 'include',
    });

    if (resp.status !== 200) throw new Error(resp.statusText);

    const result = await resp.json();
    if (!result || !result.data) {
      console.log(result.errors);
      throw new Error('Failed to load the list of champions.');
    }

    return <Home data={result.data.champions} />;
  },
};
