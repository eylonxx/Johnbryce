const test = () => {
  try {
    let final = factorGrade(105);
    console.log(final);
  } catch (err) {
    console.log(err);
  }
};

const factorGrade = (grade) => {
  const factoredGrade = 10 * Math.sqrt(grade);
  if (factoredGrade < 0 || factoredGrade > 100) {
    throw new Error();
  } else return factoredGrade;
};
