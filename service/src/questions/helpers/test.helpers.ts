import faker from '@faker-js/faker';

export const generateQuestionDto = () => ({
  text: faker.lorem.sentence(),
  answers: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    text: faker.lorem.sentence(),
    weight: faker.datatype.number(),
  })),
});
