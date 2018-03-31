// 引入jsonfile模块
// https://github.com/jprichardson/node-jsonfile
var jsonFile = require('jsonfile');

var file = './test.json';
jsonFile.readFile(file, function (err, obj) {
  if (err) {
    console.log(err);
  } else {
    console.log(obj);
  }
});