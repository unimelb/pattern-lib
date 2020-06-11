import mockResults from '../../../../mockData/majorsAndSpecialisations.json';
import delay from '../../helpers/delay';

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
  await delay();

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
