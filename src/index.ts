import fetch from 'node-fetch';

import { log } from './logger';

export async function githubdb() {
  log('Blabla!', fetch);
  return fetch('https://api.github.com/users/steffansluis')
    .then(response => <Promise<Object>> response.json());
}

export default githubdb;
