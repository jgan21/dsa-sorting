type tPerson = { fname: string, lname: string; };

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {
  const sorted = arr.sort((a: tPerson, b: tPerson): number => {
    if (a.lname < b.lname) {
      return -1;
    } else if (a.lname > b.lname) {
      return 1;
    } else {
      if (a.fname < b.fname) {
        return -1;
      }
      else if (a.fname > b.fname) {
        return 1;
      }
      else {
        return 0;
      }
    }
  }
);
  return sorted;
}

export { peopleSort };
// c before j -> c less j
// c = c -> 0
// j after c = j more c