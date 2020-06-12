const cityLabels = {
  sydney: 'Sydney',
  melbourne: 'Melbourne',
  goldCoast: 'Gold coast',
};

export const filterByLocationAndCampus = (allResults, locations) => {
  const resultsWithDuplicates = [];
  locations.forEach(([, city, campus]) => {
    const cityLabel = cityLabels[city];

    const foundResults = allResults.filter((result) => {
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
};

export default filterByLocationAndCampus;
