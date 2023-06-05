#!/usr/bin/env node

const yargs = require('yargs');

// Получение текущей даты и времени в формате ISO
yargs.command({
command: 'current',
describe: 'Get current date and time in ISO format',
handler: function () {
console.log(new Date().toISOString());
}
});

// Получение текущего года
yargs.command({
command: 'current-year',
describe: 'Get current year',
handler: function () {
console.log(new Date().getFullYear());
}
});

// Получение текущего месяца
yargs.command({
command: 'current-month',
describe: 'Get current month',
handler: function () {
console.log(new Date().getMonth() + 1);
}
});

// Получение текущей даты в календарном месяце
yargs.command({
command: 'current-date',
describe: 'Get current date in the calendar month',
handler: function () {
console.log(new Date().getDate());
}
});

// Добавление времени
yargs.command({
command: 'add',
describe: 'Add time to current date and time',
builder: {
'd': {
describe: 'Days to add',
demandOption: true,
type: 'number'
},
'm': {
describe: 'Months to add',
demandOption: true,
type: 'number'
},
},
handler: function (argv) {
let date = new Date();
if (argv.d) {
date.setDate(date.getDate() + argv.d);
}
if (argv.m) {
date.setMonth(date.getMonth() + argv.m);
}
console.log(date.toISOString());
}
});

// Вычитание времени
yargs.command({
command: 'sub',
describe: 'Subtract time from current date and time',
builder: {
'd': {
describe: 'Days to subtract',
demandOption: true,
type: 'number'
},
'm': {
describe: 'Months to subtract',
demandOption: true,
type: 'number'
},
},
handler: function (argv) {
let date = new Date();
if (argv.d) {
date.setDate(date.getDate() - argv.d);
}
if (argv.m) {
date.setMonth(date.getMonth() - argv.m);
}
console.log(date.toISOString());
}
});

yargs.parse();