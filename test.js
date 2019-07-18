////////Test
const request = require('request');

//Retrieve all users
request.get('http://localhost:3000/api/v1/employees/',
  { json: true },
  (err, res, body) => {
      if (err) { return console.log(err); }
      console.log('List of Users:')
      console.log(res.body);
});

//Find & retrieve a given user
const getEmployeeUrl = 'http://localhost:3000/api/v1/employees/' + exports.employeeName + '/';
request.get(
{ url: getEmployeeUrl },
function (err, res, body) {
  if (err) { return console.log(err); }
  console.log('Retrieved User: ')
  console.log(res.body);
});


// const deleteEmployeeUrl = 'http://localhost:3000/api/v1/delete/' + exports.retrievedEmployeeId + '/';
// request.delete(
//   { url: deleteEmployeeUrl },
//   function (err, res, body) {
//     if (err) { return console.log(err) }
//     console.log('Deleted!');
//     console.log(res.body);
// });
