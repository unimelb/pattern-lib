const mockResults = [
  {
    id: '0',
    name: 'Ancient World Studies',
  },
  {
    id: '1',
    name: 'Anthropology',
  },
  {
    id: '2',
    name: 'Arabic',
  },
  {
    id: '3',
    name: 'Art History',
  },
  {
    id: '4',
    name: 'Asian Studies',
  },
  {
    id: '5',
    name: 'Australian Indigenous Studies',
  }, {
    id: '6',
    name: 'Chinese Societies (Minor)',
  },
  {
    id: '7',
    name: 'Chinese Studies',
  },
  {
    id: '8',
    name: 'Classics',
  },
  {
    id: '9',
    name: 'Creative Writing',
  },
  {
    id: '10',
    name: 'Criminology',
  },
  {
    id: '11',
    name: 'Development Studies Minor',
  },
  {
    id: '12',
    name: 'Economics',
  },
  {
    id: '13',
    name: 'English Language Studies Minor',
  },
  {
    id: '14',
    name: 'English and Theatre Studies',
  },
  {
    id: '15',
    name: 'Environmental Studies Minor',
  },
  {
    id: '16',
    name: 'European Studies Minor',
  },
  {
    id: '17',
    name: 'French Studies',
  },
  {
    id: '18',
    name: 'Gender Studies',
  },
  {
    id: '19',
    name: 'Geography',
  },
  {
    id: '20',
    name: 'German Studies',
  },
  {
    id: '21',
    name: 'Hebrew and Jewish Studies',
  },
  {
    id: '22',
    name: 'History',
  },
  {
    id: '23',
    name: 'Indonesian Studies',
  },
  {
    id: '24',
    name: 'Islamic Studies',
  },
  {
    id: '25',
    name: 'Italian Studies',
  },
  {
    id: '26',
    name: 'Japanese Studies',
  },
  {
    id: '27',
    name: 'Knowledge and Learning (Minor)',
  },
  {
    id: '28',
    name: 'Law and Justice (Minor)',
  },
  {
    id: '29',
    name: 'Linguistics and Applied Linguistics',
  },
  {
    id: '30',
    name: 'Media and Communications',
  },
  {
    id: '31',
    name: 'Philosophy',
  },
  {
    id: '32',
    name: 'Politics and International Studies',
  },
  {
    id: '33',
    name: 'Psychology',
  },
  {
    id: '34',
    name: 'Refugee and Forced Migration',
  },
  {
    id: '35',
    name: 'Russian',
  },
  {
    id: '36',
    name: 'History and Philosophy of Science',
  },
  {
    id: '37',
    name: 'Screen and Cultural Studies',
  },
  {
    id: '38',
    name: 'Sociology',
  },
  {
    id: '39',
    name: 'Spanish and Latin American Studies',
  },
];

let chunkNum = 0;
const quantityToReturn = 10;
export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const begin = chunkNum * quantityToReturn;
  const end = begin + 10;
  const result = mockResults.slice(begin, end);

  if (result.length) {
    chunkNum += 1;

    return result;
  }
  chunkNum = 0;
  return mockResults.slice(0, quantityToReturn);
};
