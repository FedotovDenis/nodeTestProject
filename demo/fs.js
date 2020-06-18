// File System
const fs = require("fs")
const path = require("path")
// Создание папки
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//    if (err) {
//        throw err
//    }
//    console.log("Папка сoздана")
// })

// Создание файла в папке
 const filePath = path.join(__dirname, "test", "text.txt")
// fs.writeFile(filePath, "Hello NodeJS", (err) => {
// if (err) {
// throw err
//    }
//    console.log("Файл создан")
// })

// Чтение указаного файла
fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
})