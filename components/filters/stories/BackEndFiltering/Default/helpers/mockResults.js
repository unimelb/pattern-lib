import {
  filterByFaculty,
  filterByLocationAndCampus,
} from '../../../../helpers/locationsAndFacultiesFilterHelpers';
import mockResults from '../../../../mockData/faculties.json';
import delay from '../../helpers/delay';

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
