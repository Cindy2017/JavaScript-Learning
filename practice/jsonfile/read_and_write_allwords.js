//引入需要的模块
var fs = require('fs');
var jsonfile = require('jsonfile');

//定义要扫描的目标文件夹路径
var readPath = '../../../words-from-the-heart/';

//用于存放所有心里话的文件路径
var writePath = './allwords.json';

//用于存放格式错误的文件名路径
var erroPath = './erro.json';

fs.readdir(readPath,function(err,files){
    if(err){
        console.log('读取失败');
        return;
    }
    //扫描出所有json文件，把文件名存放在fileName数组里
    var fileName = [];
    for (var i = 0; i < files.length; i++){
        if(files[i].includes('.json')){
            fileName.push(files[i]);
        }
    }

    var allWords = [];
    var erroWords = [];
    for(var i = 0; i < fileName.length; i++ ){
        try {
            var fileContent = jsonfile.readFileSync(readPath + fileName[i]);
            allWords.push(fileContent);
        }catch(err){
            erroWords.push(fileContent)
        }
    }

    jsonfile.writeFileSync(writePath, allWords);
    jsonfile.writeFileSync(erroPath,erroWords);
})
