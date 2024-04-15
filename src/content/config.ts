import { z, defineCollection } from 'astro:content';

const announcementsCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        role: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
});

export const collections = {
  'announcements': announcementsCollection,
};