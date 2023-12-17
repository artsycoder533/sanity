import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: 'v09som0v',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
})