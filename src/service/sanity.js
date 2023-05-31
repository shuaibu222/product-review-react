import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.PROJECT_ID_KEY,
  dataset: 'production',
  token: process.env.TOKEN_KEY,
  useCdn: false,
  apiVersion: '2023-04-09',
});
