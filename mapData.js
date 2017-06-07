const f = require('./fruits');

function mapData(data) {
  let blobs = data.map(model => {
    let keys = Object.keys(model);
  });

  return {
    blobs,
    trees
  };
}

console.log(mapData(f));
