import faker from '@faker-js/faker';

export const generateQuestionDto = () => ({
  text: faker.lorem.sentence(),
  answers: [...Array(faker.datatype.number({ min: 4, max: 4 }))].map(
    (_, idx) => ({
      text: faker.lorem.sentence(),
      weight: idx,
    }),
  ),
});
