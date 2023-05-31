import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'r5xenvjr',
  dataset: 'production',
  token:
    'skvALjuW2tpLYFulNTsWsDsZ48vkaGwnYFNSXvkOdbdfmkbddnRMjgsxFcIBv0phcvlgVN4KRRO8rLxoqoZD4B5Aq2k0lYfywOx75QPs6MTorbgpbelh9yx6354xuhzDlXmlk9TkVniae5UPJdiIJOlhuW6Z17rxHfCkfBzybfOgimvj90xC',
  useCdn: false,
  apiVersion: '2023-04-09',
});
