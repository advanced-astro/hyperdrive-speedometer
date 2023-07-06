module.exports = {
  showcase: async () => {
    const blocklist = new Set([
      'https://dendauw.tech/',
      'https://replicant.band/',
      'https://stephen.solka.dev/',
      'https://www.mostlywhat.cf/',
      'https://flamrdevs.vercel.app/',
      'https://legrostonneau-festival.fr/',
      'https://cantoo.app/',
      'https://www.articoliesocial.it/',
      // Sites blocked 5 July 2023:
      'https://angeldollface.art/',
      'https://anasweb.site',
      'https://www.codef.site/',
      'https://blog.lanceross.xyz/',
      'https://lanceross.xyz/',
      'https://serendipitytheme.com/',
      'https://t-red.love/',
      'https://weboreviews.com/',
      // Sites blocked 6 July 2023:
      'https://akinkunmi.dev/',
      'https://www.alexstreza.dev/',
      'https://anasweb.site/',
      'https://beradiostereo.com/',
      'https://juniorjobs.pages.dev/',
      'https://michaels.studio/',
      'https://www.notionpaper.cc/',
      'https://sequoiatheme.com/',
      'https://www.stardew.cc/',
      'https://synco.re/',
      'https://unwrapped.design/',
      'https://unwrapped.studio/',
      'https://uzzieltech.co.ke/',
      'https://zkrew.red/rescaler/',
    ]);

    const fetch = (await import('node-fetch')).default;

    /** @type {string[]} */
    const urls = await fetch('https://astro.build/api/showcase.json')
      .then((res) => res.json())
      .then((json) =>
        json.map((site) => site.url).filter((url) => !blocklist.has(url))
      );

    return {
      name: 'Showcase',
      description: 'Sites from the Astro showcase',
      options: { frequency: 1380 },
      urls,
    };
  },
};
