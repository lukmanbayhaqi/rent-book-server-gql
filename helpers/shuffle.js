module.exports = function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

/**
 * mutation ($id: uuid, $name: String, $timestamp: timestamptz, $twitter: String) {
  insert_users(objects: {id: $id, name: $name, twitter: $twitter, timestamp: $timestamp}) {
    returning {
      id
      name
    }
  }
}

{
  "id": "1265734",
  "name": "Spielberrgg",
  "timestamp": "2022-02-05T02:18:45.482Z",
  "twitter": "Spielberg_San"
}
 */
