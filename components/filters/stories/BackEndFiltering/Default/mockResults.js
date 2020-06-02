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
  await delay();

  if (throwError) {
    throw new Error('Something went wrong');
  }

  const resultsFilteredByLocation = filterByLocationAndCampus(mockResults, locations);
  const results = filterByFaculty(resultsFilteredByLocation, faculties);

  return {
    results,
    quantity: {
      locations: {
        all: {
          quantity: 3,
          sydney: {
            quantity: 2,
            cbd: {
              quantity: 2,
            },
            bondi: {
              quantity: 1,
            },
          },
          melbourne: {
            quantity: 2,
            southbank: {
              quantity: 2,
            },
            parkville: {
              quantity: 1,
            },
          },
          goldCoast: {
            quantity: 1,
            cbd: {
              quantity: 1,
            },
          },
        },
      },
      faculties: {
        all: {
          quantity: 3,
          facultyOfArt: {
            quantity: 1,
          },
          facultyOfHistory: {
            quantity: 1,
          },
          facultyOfSociology: {
            quantity: 1,
          },
        },
      },
    },
  };
};

function filterByLocationAndCampus(allResults, locations) {
  const resultsWithDuplicates = [];
  locations.forEach(([, city, campus]) => {
    const cityLabel = cityLabels[city];

    const foundResults = mockResults.filter((result) => {
      const foundCity = result.city.find((resultCity) => resultCity.name === cityLabel);

      return foundCity && foundCity.campus.includes(campus);
    });

    resultsWithDuplicates.push(...foundResults);
  });

  // remove duplicates and return
  return resultsWithDuplicates.reduce(
    (uniqueResults, resultToBeAdded) => (uniqueResults.some((uniqueResult) => uniqueResult.id === resultToBeAdded.id)
      ? uniqueResults
      : [...uniqueResults, resultToBeAdded]),
    []
  );
}

function filterByFaculty(allResults, faculties) {
  const selectedFacultyLabels = faculties.map(([, faculty]) => facultyLabels[faculty]);

  return allResults.filter((result) => selectedFacultyLabels.includes(result.faculty));
}

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
