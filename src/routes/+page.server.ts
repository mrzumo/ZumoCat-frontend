import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  return {
    streamed: {
      cats: fetch('https://api.zumo.cat/latest').then((r) => r.json())
      // Uncomment to test streaming times
      // cats: new Promise((resolve) => {
      //   setTimeout(() => {
      //     fetch('https://api.zumo.cat/latest')
      //       .then((r) => r.json())
      //       .then(resolve);
      //   }, 3000);
      // })
    }
  };
}) satisfies PageServerLoad;
