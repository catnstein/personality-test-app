import { Question } from '../entities/question.entity';

export const initialData: Question[] = [
  {
    id: 0,
    text: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    answers: [
      {
        text: 'Don’t dare to interrupt them',
        weight: 0,
      },
      {
        text: 'Think it’s more important to give them some of your time; work can wait',
        weight: 1,
      },
      {
        text: 'Listen, but with only with half an ear',
        weight: 2,
      },
      {
        text: 'Interrupt and explain that you are really busy at the moment',
        weight: 3,
      },
    ],
  },
  {
    id: 1,
    text: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    answers: [
      {
        text: 'Look at your watch every two minutes',
        weight: 0,
      },
      {
        text: 'Bubble with inner anger, but keep quiet',
        weight: 1,
      },
      {
        text: 'Explain to other equally impatient people in the room that the doctor is always running late',
        weight: 2,
      },
      {
        text: 'Complain in a loud voice, while tapping your foot impatiently',
        weight: 3,
      },
    ],
  },
  {
    id: 2,
    text: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    answers: [
      {
        text: 'Don’t dare contradict them',
        weight: 0,
      },
      {
        text: 'Think that they are obviously right',
        weight: 1,
      },
      {
        text: 'Defend your own point of view, tooth and nail',
        weight: 2,
      },
      {
        text: 'Continuously interrupt your colleague',
        weight: 3,
      },
    ],
  },
  {
    id: 3,
    text: 'You are taking part in a guided tour of a museum. You:',
    answers: [
      {
        text: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
        weight: 0,
      },
      {
        text: 'Follow the group without question',
        weight: 1,
      },
      {
        text: 'Make sure that everyone is able to hear properly',
        weight: 2,
      },
      {
        text: 'Are right up the front, adding your own comments in a loud voice',
        weight: 3,
      },
    ],
  },
];
