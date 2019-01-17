var fs = require('fs')

/** 
 * sync code
  * */ 

// var fileContent = fs.readFileSync('readme.txt','UTF-8')
// console.log(fileContent)

// fs.writeFileSync('writeMe.txt',fileContent)


/***
 * non-sync code
 */

// fs.readFile('readme.txt','UTF-8',function(error,data) {
//     console.log('data is '+ data)


//     fs.writeFile('writeme2.txt',data,function(error) {
//         if(error != null) {
//             console.log('error writing file' + error)
//         }
        
//     })

// });

// console.log('is this blocking. ? ')

// fs.writeFileSync('writeMe.txt',fileContent)


/****
 * Delete the file
 */

//  fs.unlinkSync('writeme2.txt')


/****
 * make a directory
 */

// fs.mkdirSync('stuff-dir')


/****
 * remove a directory
 */

// fs.rmdirSync('stuff-dir')


// fs.mkdir('stuff-dir',function(){

//     console.log('directory created successfully')

//     fs.readFile('readme.txt','utf8',function(err,data) {

//         console.log("content of file "+data)

//         fs.writeFile('./stuff-dir/stufffile.txt',data, function(err) {
//                 if(err !=null) {
//                     console.error('Exception writing to file')
//                 }
//         })
//     })

// })


// remove directory - can be removed only if directory is empty
// fs.unlink('./stuff-dir/stufffile.txt',function(err){
//      if(err !=null )  {
//          console.error('error removing file ')
//          return
//      } 

//      fs.rmdir('./stuff-dir',function(err){
//         if(err !=null )  {
//             console.error('error removing directory ')
//             return
//         } 
//      })

// })













