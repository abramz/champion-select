import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action({ query }) { // eslint-disable-line react/prop-types
    const locale = query.locale || 'en_US';
    const options = `["${['image', 'tags'].join('", "')}"]`;

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          champions(locale: "${locale}", options: ${options}) {
            version
            data {
              key
              name
              image {
                sprite
                h
                w
                x
                y
              }
              tags
            }
          }
        }`,
      }),
      credentials: 'include',
    });

    const result = await resp.json();
    if (!result || !result.data) {
      console.log(result.errors);
      throw new Error('Failed to load the list of champions.');
    }

    return <Home data={result.data.champions} />;
  },
};
