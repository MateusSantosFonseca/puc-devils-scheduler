import { developer } from './developer';
import { production } from './production';

export function handleAmbiente() {
  const hostname = window && window.location && window.location.hostname;

  if (hostname.includes('localhost')) return developer;
  else return production;
}
