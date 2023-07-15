import Dexie, { Table } from 'dexie';

import { Note } from './types';

export const DB_NAME = 'notes';

export class MySubClassedDexie extends Dexie {
  notes!: Table<Note>;

  constructor() {
    super(DB_NAME);
    this.version(1).stores({
      notes: '++id, title, description, createdAt',
    });
  }
}

export const db = new MySubClassedDexie();
