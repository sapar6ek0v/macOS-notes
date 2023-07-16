import { Note } from '@/db/types';

export const sortByCreatedAt = (data: Note[]) =>
  data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
