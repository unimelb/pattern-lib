const mockResults = [
  {
    type: 'major',
    name: 'Ancient World Studies',
  },
  {
    type: 'major',
    name: 'Anthropology',
  },
  {
    type: 'major',
    name: 'Arabic',
  },
  {
    type: 'major',
    name: 'Art History',
  },
  {
    type: 'major',
    name: 'Asian Studies',
  },
  {
    type: 'major',
    name: 'Australian Indigenous Studies',
  }, {
    type: 'major',
    name: 'Chinese Societies (Minor)',
  },
  {
    type: 'major',
    name: 'Chinese Studies',
  },
  {
    type: 'major',
    name: 'Classics',
  },
  {
    type: 'major',
    name: 'Creative Writing',
  },
  {
    type: 'major',
    name: 'Criminology',
  },
  {
    type: 'major',
    name: 'Development Studies Minor',
  },
  {
    type: 'major',
    name: 'Economics',
  },
  {
    type: 'major',
    name: 'English Language Studies Minor',
  },
  {
    type: 'major',
    name: 'English and Theatre Studies',
  },
  {
    type: 'major',
    name: 'Environmental Studies Minor',
  },
  {
    type: 'major',
    name: 'European Studies Minor',
  },
  {
    type: 'major',
    name: 'French Studies',
  },
  {
    type: 'major',
    name: 'Gender Studies',
  },
  {
    type: 'major',
    name: 'Geography',
  },
  {
    type: 'major',
    name: 'German Studies',
  },
  {
    type: 'major',
    name: 'Hebrew and Jewish Studies',
  },
  {
    type: 'major',
    name: 'History',
  },
  {
    type: 'major',
    name: 'Indonesian Studies',
  },
  {
    type: 'major',
    name: 'Islamic Studies',
  },
  {
    type: 'major',
    name: 'Italian Studies',
  },
  {
    type: 'major',
    name: 'Japanese Studies',
  },
  {
    type: 'major',
    name: 'Knowledge and Learning (Minor)',
  },
  {
    type: 'major',
    name: 'Law and Justice (Minor)',
  },
  {
    type: 'major',
    name: 'Linguistics and Applied Linguistics',
  },
  {
    type: 'major',
    name: 'Media and Communications',
  },
  {
    type: 'major',
    name: 'Philosophy',
  },
  {
    type: 'major',
    name: 'Politics and International Studies',
  },
  {
    type: 'major',
    name: 'Psychology',
  },
  {
    type: 'major',
    name: 'Refugee and Forced Migration',
  },
  {
    type: 'major',
    name: 'Russian',
  },
  {
    type: 'major',
    name: 'History and Philosophy of Science',
  },
  {
    type: 'major',
    name: 'Screen and Cultural Studies',
  },
  {
    type: 'major',
    name: 'Sociology',
  },
  {
    type: 'major',
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
