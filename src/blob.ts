import { get, put } from './github';

export async function read(repo, hash) {
  return get(repo, 'blob', hash);
}

export async function write(repo, content) {
  return put(repo, 'blob', content);
}

read('steffansluis/express-mongo-router', 'de74a6aa3327faed45e8ae9db0a6bd5f9ddcfb08')
  .then(blob => console.log(new Buffer(blob.content, 'base64').toString()));
