import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lamps.svg' },
    { title: 'Batteries', image: 'batteries.svg' },
    { title: 'Paper', image: 'paper.svg' },
    { title: 'Electronic', image: 'electronics.svg' },
    { title: 'Organic', image: 'organic.svg' },
    { title: 'Oil', image: 'oil.svg' },
  ])
}
