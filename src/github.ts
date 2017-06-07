import fetch from 'node-fetch';

const API_URL = 'https://api.github.com/';

const typeMap = {
  blob: 'git/blobs'
}

function _mapType(type) {
  if (!(type in typeMap)) throw new Error(`${type} is not a valid type.`);
  return typeMap[type];
}

export async function get(repo, type, slug) {
  let url = `https://api.github.com/repos/${repo}/${_mapType(type)}/${slug}`;
  console.log(url);
  return fetch(url)
    .then(response => <Promise<Object>> response.json());
}

export async function put(repo, type, body) {
  let url = `https://api.github.com/repos/${repo}/${_mapType(type)}`;
  console.log(url);
  // return fetch(url, {
  //   method: 'POST',
  //   body
  // }).then(response => <Promise<Object>> response.json());
}
