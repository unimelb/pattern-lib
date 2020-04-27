const mockResults = [
  {
    id: '0',
    name: 'Ancient World Studies',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  },
  {
    id: '1',
    name: 'Anthropology',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  },
  {
    id: '2',
    name: 'Arabic',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  },
  {
    id: '3',
    name: 'Art History',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  },
  {
    id: '4',
    name: 'Asian Studies',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  },
  {
    id: '5',
    name: 'Australian Indigenous Studies',
    excerpt: 'bachelor',
    studyOption: 'undergrad',
  }, {
    id: '6',
    name: 'Chinese Societies (Minor)',
    excerpt: 'diploma',
    studyOption: 'undergrad',
  },
  {
    id: '7',
    name: 'Chinese Studies',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '8',
    name: 'Classics',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '9',
    name: 'Creative Writing',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '10',
    name: 'Criminology',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '11',
    name: 'Development Studies Minor',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '12',
    name: 'Economics',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '13',
    name: 'English Language Studies Minor',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '14',
    name: 'English and Theatre Studies',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '15',
    name: 'Environmental Studies Minor',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '16',
    name: 'European Studies Minor',
    excerpt: 'certificate',
    studyOption: 'postgrad',
  },
  {
    id: '17',
    name: 'French Studies',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '18',
    name: 'Gender Studies',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '19',
    name: 'Geography',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '20',
    name: 'German Studies',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '21',
    name: 'Hebrew and Jewish Studies',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '22',
    name: 'History',
    excerpt: 'diploma',
    studyOption: 'postgrad',
  },
  {
    id: '23',
    name: 'Indonesian Studies',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '24',
    name: 'Islamic Studies',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '25',
    name: 'Italian Studies',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '26',
    name: 'Japanese Studies',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '27',
    name: 'Knowledge and Learning (Minor)',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '28',
    name: 'Law and Justice (Minor)',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '29',
    name: 'Linguistics and Applied Linguistics',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '30',
    name: 'Media and Communications',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '31',
    name: 'Philosophy',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '32',
    name: 'Politics and International Studies',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '33',
    name: 'Psychology',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '34',
    name: 'Refugee and Forced Migration',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '35',
    name: 'Russian',
    excerpt: 'master',
    studyOption: 'postgrad',
  },
  {
    id: '36',
    name: 'History and Philosophy of Science',
    excerpt: 'master',
    studyOption: 'research',
  },
  {
    id: '37',
    name: 'Screen and Cultural Studies',
    excerpt: 'master',
    studyOption: 'research',
  },
  {
    id: '38',
    name: 'Sociology',
    excerpt: 'phd',
    studyOption: 'research',
  },
  {
    id: '39',
    name: 'Spanish and Latin American Studies',
    excerpt: 'phd',
    studyOption: 'research',
  },
];

const groupedByStudyOption = groupBy(mockResults, 'studyOption');

const groupedByExcerpt = {
  all: Object.keys(groupedByStudyOption).reduce(
    (groupedByStudyOptionByExcerpt, studyOption) => {
      const resultsArray = groupedByStudyOption[studyOption];

      groupedByStudyOptionByExcerpt[studyOption] = groupBy(resultsArray, 'excerpt');

      return groupedByStudyOptionByExcerpt;
    },
    {}
  ),
};

// TODO calculate recursively
const undergradQuantity = groupedByStudyOption.undergrad.length;
const postgradQuantity = groupedByStudyOption.postgrad.length;
const researchQuantity = groupedByStudyOption.research.length;

const quantity = {
  all: {
    undergrad: {
      quantity: undergradQuantity,
      bachelor: groupedByExcerpt.all.undergrad.bachelor.length,
      diploma: groupedByExcerpt.all.undergrad.diploma.length,
    },
    postgrad: {
      quantity: postgradQuantity,
      certificate: groupedByExcerpt.all.postgrad.certificate.length,
      diploma: groupedByExcerpt.all.postgrad.diploma.length,
      master: groupedByExcerpt.all.postgrad.master.length,
    },
    research: {
      quantity: researchQuantity,
      master: groupedByExcerpt.all.research.master.length,
      phd: groupedByExcerpt.all.research.phd.length,
    },
    quantity: undergradQuantity + postgradQuantity + researchQuantity,
  },
};

function groupBy(arrayOfItems, propToGroupBy) {
  return arrayOfItems.reduce(
    (accumulator, item) => {
      if (accumulator[item[propToGroupBy]]) {
        accumulator[item[propToGroupBy]].push(item);
      } else {
        accumulator[item[propToGroupBy]] = [item];
      }

      return accumulator;
    },
    {}
  );
}

function pick(collection, [firstKey, ...restKeys]) {
  const pickedCollection = collection[firstKey];

  if (restKeys.length) {
    return pick(pickedCollection, restKeys);
  }

  return pickedCollection;
}

export default async (selectedNames, throwError = false) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  if (throwError) {
    throw new Error('Something went wrong');
  }

  const results = [];
  selectedNames.forEach((paths) => {
    const items = pick(groupedByExcerpt, paths) || [];
    results.push(
      ...items
    );
  });

  return {
    results,
    quantity,
  };
};
