import alfy from "alfy";

alfy
  .fetch("https://boardgamegeek.com/search/boardgame", {
    searchParams: {
      showcount: 20,
      q: alfy.input,
    },
  })
  .then(({ items }) =>
    alfy.output(
      items.map(({ name, href, yearpublished }) => ({
        title: name,
        subtitle: `Published in ${yearpublished}`,
        arg: `https://boardgamegeek.com${href}`,
      }))
    )
  );
