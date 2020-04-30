const mockResults = [
  {
    id: '0',
    name: 'History and Philosophy of Science',
    city: [
      {
        name: 'Sydney',
        campus: ['cbd', 'bondi'],
      },
      {
        name: 'Melbourne',
        campus: ['southbank', 'parkville'],
      },
    ],
    faculty: 'Faculty of History',
    description: 'Labore est anim consequat veniam duis nulla esse esse labore repr',
  },
  {
    id: '2',
    name: 'Screen and Cultural Studies',
    city: [
      {
        name: 'Gold coast',
        campus: ['cbd'],
      },
      {
        name: 'Melbourne',
        campus: ['southbank'],
      },
    ],
    faculty: 'Faculty of Art',
    description: 'Labore est anim consequat veniam duis nulla esse esse labore repr',
  },
  {
    id: '3',
    name: 'Sociology',
    city: [
      {
        name: 'Sydney',
        campus: ['cbd', 'mainly'],
      },
    ],
    faculty: 'Faculty of Sociology',
    description: 'Labore est anim consequat veniam duis nulla esse esse labore repr',
  },
];

const facultyLabels = {
  facultyOfHistory: 'Faculty of History',
  facultyOfSociology: 'Faculty of Sociology',
  facultyOfArt: 'Faculty of Art',
};

const cityLabels = {
  sydney: 'Sydney',
  melbourne: 'Melbourne',
  goldCoast: 'Gold coast',
};

export default async ({ locations, faculties }, throwError = false) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  if (throwError) {
    throw new Error('Something went wrong');
  }

  const selectedFacultyLabels = faculties.map(([, faculty]) => facultyLabels[faculty]);

  const results = [];
  locations.forEach(([, city, campus]) => {
    const cityLabel = cityLabels[city];
    const foundResults = mockResults.filter((result) => {
      const foundCity = result.city.find((resultCity) => resultCity.name === cityLabel);

      return foundCity
        && foundCity.campus.includes(campus)
        && selectedFacultyLabels.includes(result.faculty);
    });

    results.push(...foundResults);
  });

  return results.reduce(
    (uniqueResults, resultToBeAdded) => (uniqueResults.some((uniqueResult) => uniqueResult.id === resultToBeAdded.id)
      ? uniqueResults
      : [...uniqueResults, resultToBeAdded]),
    []
  );
};
