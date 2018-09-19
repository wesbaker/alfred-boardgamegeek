const alfy = require("alfy");

alfy
  .fetch("https://boardgamegeek.com/search/boardgame", {
    query: {
      showcount: 20,
      q: alfy.input
    }
  })
  .then(({ items }) =>
    alfy.output(
      items.map(({ name, href, yearpublished }) => ({
        title: name,
        subtitle: `Published in ${yearpublished}`,
        arg: `https://boardgamegeek.com${href}`
      }))
    )
  );
