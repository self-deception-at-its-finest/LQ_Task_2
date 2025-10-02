import { faker } from '@faker-js/faker';

export function createRandomUser() {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}