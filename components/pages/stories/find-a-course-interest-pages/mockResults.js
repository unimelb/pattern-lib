const mockResults = [
  {
    id: '0',
    name: 'Ancient World Studies',
    cols: 2,
  },
  {
    id: '1',
    name: 'Anthropology',
    cols: 2,
  },
  {
    id: '2',
    name: 'Arabic',
    cols: 2,
  },
  {
    id: '3',
    name: 'Art History',
    cols: 2,
  },
  {
    id: '4',
    name: 'Asian Studies',
    cols: 2,
  },
  {
    id: '5',
    name: 'Australian Indigenous Studies',
    cols: 2,
  }, {
    id: '6',
    name: 'Chinese Societies (Minor)',
    cols: 2,
  },
  {
    id: '7',
    name: 'Chinese Studies',
    cols: 2,
  },
  {
    id: '8',
    name: 'Classics',
    cols: 2,
  },
  {
    id: '9',
    name: 'Creative Writing',
    cols: 2,
  },
  {
    id: '10',
    name: 'Criminology',
    cols: 2,
  },
  {
    id: '11',
    name: 'Development Studies Minor',
    cols: 2,
  },
  {
    id: '12',
    name: 'Economics',
    cols: 2,
  },
  {
    id: '13',
    name: 'English Language Studies Minor',
    cols: 2,
  },
  {
    id: '14',
    name: 'English and Theatre Studies',
    cols: 2,
  },
  {
    id: '15',
    name: 'Environmental Studies Minor',
    cols: 2,
  },
  {
    id: '16',
    name: 'European Studies Minor',
    cols: 2,
  },
  {
    id: '17',
    name: 'French Studies',
    cols: 2,
  },
  {
    id: '18',
    name: 'Gender Studies',
    cols: 2,
  },
  {
    id: '19',
    name: 'Geography',
    cols: 2,
  },
  {
    id: '20',
    name: 'German Studies',
    cols: 2,
  },
  {
    id: '21',
    name: 'Hebrew and Jewish Studies',
    cols: 2,
  },
  {
    id: '22',
    name: 'History',
    cols: 2,
  },
  {
    id: '23',
    name: 'Indonesian Studies',
    cols: 2,
  },
  {
    id: '24',
    name: 'Islamic Studies',
    cols: 2,
  },
  {
    id: '25',
    name: 'Italian Studies',
    cols: 2,
  },
  {
    id: '26',
    name: 'Japanese Studies',
    cols: 2,
  },
  {
    id: '27',
    name: 'Knowledge and Learning (Minor)',
    cols: 2,
  },
  {
    id: '28',
    name: 'Law and Justice (Minor)',
    cols: 2,
  },
  {
    id: '29',
    name: 'Linguistics and Applied Linguistics',
    cols: 2,
  },
  {
    id: '30',
    name: 'Media and Communications',
    cols: 2,
  },
  {
    id: '31',
    name: 'Philosophy',
    cols: 2,
  },
  {
    id: '32',
    name: 'Politics and International Studies',
    cols: 2,
  },
  {
    id: '33',
    name: 'Psychology',
    cols: 2,
  },
  {
    id: '34',
    name: 'Refugee and Forced Migration',
    cols: 2,
  },
  {
    id: '35',
    name: 'Russian',
    cols: 2,
  },
  {
    id: '36',
    name: 'History and Philosophy of Science',
    cols: 2,
  },
  {
    id: '37',
    name: 'Screen and Cultural Studies',
    cols: 2,
  },
  {
    id: '38',
    name: 'Sociology',
    cols: 2,
  },
  {
    id: '39',
    name: 'Spanish and Latin American Studies',
    cols: 2,
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
