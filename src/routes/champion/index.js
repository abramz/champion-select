import React from 'react';
import Champion from './Champion';
import fetch from '../../core/fetch';

export default {

  path: '/champion/:key',

  async action(context, { key }) { // eslint-disable-line react/prop-types
    const championOpts = `["${['partype', 'image', 'info', 'skins', 'stats'].join('", "')}"]`;
    const options = `["${['image', 'tags'].join('", "')}"]`;

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          champion(key: "${key}", options: ${championOpts}) {
            key
            name
            name
            title
            partype
            image {
              group
            }
            info {
              attack
              defense
              difficulty
              magic
            }
            stats {
              armor
              armorperlevel
              attackdamage
              attackdamageperlevel
              attackrange
              attackspeedoffset
              attackspeedperlevel
              crit
              critperlevel
              hp
              hpperlevel
              hpregen
              hpregenperlevel
              movespeed
              mp
              mpperlevel
              mpregen
              mpregenperlevel
              spellblock
              spellblockperlevel
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
      throw new Error(`Failed to load the champion, "${key}".`);
    }
    return (
      <Champion
        champion={result.data.champion}
      />
    );
  },
};
