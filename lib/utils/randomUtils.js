import faker from 'faker';

export function generateUrl() {
    return faker.internet.url();
}

export function generateNumber() {
    const min = 1, max = 10;

    return Math.random() * (max - min) + min;
}