// Code your solution in this file
function findMatching(drivers, query) {
   return drivers.filter(function (name) {
     return name.toLowerCase() === query.toLowerCase();
   });
}

function fuzzyMatch(drivers, query) {
  let queryLength = query.length;
  return driver.filter(function (name) {
    return name.slice(0, queryLength) === query;
  });
}