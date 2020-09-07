const facultyLabels = {
  facultyOfHistory: 'Faculty of History',
  facultyOfSociology: 'Faculty of Sociology',
  facultyOfArt: 'Faculty of Art',
};

export const filterByFaculty = (allResults, faculties) => {
  const selectedFacultyLabels = faculties.map(([, faculty]) => facultyLabels[faculty]);

  return allResults.filter((result) => selectedFacultyLabels.includes(result.faculty));
};

export default filterByFaculty;
