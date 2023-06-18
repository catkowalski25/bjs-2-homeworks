function compareArrays(arr1, arr2) {
  let result =(arr1.length > arr2.length) ? 
  arr1.every((element, index) => element === arr2[index]): 
  arr2.every((element, index) => element === arr1[index]);
  return result;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).reduce((acc, user, index, filtred) => {
    acc += user.age;
    if (index === (filtred.length - 1)) {
        return acc / filtred.length;
    }
    return acc;
  }, 0);

  return result;
}