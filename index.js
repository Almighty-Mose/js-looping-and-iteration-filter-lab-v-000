// Code your solution in this file
function findMatching(drivers, query) {
   return drivers.filter(function (name) {return name.toLowerCase() === query.toLowerCase();});
}