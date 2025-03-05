const studentName = "Martin Koclíř";
const actualScore = 94;
const limit = 75;
const redDiploma = 95;

if (actualScore >= redDiploma) {
  console.log(
    `${studentName} prospěl/a s červeným diplomem s ${actualScore} body`
  );
} else if (actualScore >= limit) {
  console.log(`${studentName} prospěl/a s ${actualScore} body`);
} else {
  console.log(
    `${studentName} neprospěl/a s ${actualScore} body, chybělo mu/jí ${
      limit - actualScore
    } bodů`
  );
}
