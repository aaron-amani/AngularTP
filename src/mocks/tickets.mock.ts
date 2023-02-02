import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Aaron in Madrid',
    description: '',
    date: dateToday,
    author: 'Paul'
  },
  {
    title: 'Aaron in Paris',
    description: 'Description du voyage',
    date: dateToday,
    author: 'Anakin'
  },
];
