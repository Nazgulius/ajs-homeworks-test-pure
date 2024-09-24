import { personHP } from '../js/app.js';

test('healthy hp', () => {
  expect(personHP({name: 'Маг', health: 90})).toBe('grean');  
})

test('wounded hp', () => {
  expect(personHP({name: 'Воин', health: 40})).toBe('yellow'); 
})

test('critical hp', () => {
  expect(personHP({name: 'Вор', health: 10})).toBe('red'); 
})