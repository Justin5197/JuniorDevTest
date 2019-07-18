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
  console.log(res.body);
});
//   console.log('Returned EmployeeID:');
//   exports.returnedEmployeeId = JSON.parse(res.body);
//   console.log(exports.returnedEmployeeId);
//   const deleteEmployeeUrl = 'http://localhost:3000/api/v1/delete/' + exports.returnedEmployeeId + '/';
//   console.log(deleteEmployeeUrl);
//   request.delete(
//     { url: deleteEmployeeUrl },
//     function (err, res, body) {
//       if (err) { return console.log(err); }
//       console.log('Tests complete.');
//     });
// });
