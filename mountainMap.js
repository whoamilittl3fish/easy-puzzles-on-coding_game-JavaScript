const r = require('readline-sync');
const n = r.question()

var input = r.question().split(' ')
var heights = input.map(Number)


let line = Math.max(...heights)
let space = ""
for (; line > 0; line--) {
   // console.log("line: ", line)
    for (let i = 0; i < heights.length; i++) {
        let mid = (heights[i] - line) * 2;

        // space per mountain under line
        if (heights[i] < line)
            space += " ".repeat(heights[i] * 2)

        // space per mountain = line
        if (heights[i] >= line) {
            space += " ".repeat(line - 1)
            space += "/"
            if (mid > 0)
                space += " ".repeat(mid)
            space += "\\"
            space += " ".repeat(line - 1)
        }
    }
    space += "\n"
}

console.log(space.trimEnd())


// UNDER IS TEST WITH NUMBER
// const r = require('readline-sync');
// const n = r.question()

// var input = r.question().split(' ')
// var heights = input.map(Number)


// let line = Math.max(...heights)
// let space = ""
// for (; line > 0; line--) {
//    // console.log("line: ", line)
//     for (let i = 0; i < heights.length; i++) {
//         let mid = (heights[i] - line) * 2;

//         // space per mountain under line
//         if (heights[i] < line)
//             space += String(heights[i] * 2).repeat(heights[i] * 2)

//         // space per mountain = line
//         if (heights[i] >= line) {
//             space += String(line - 1).repeat(line - 1)
//             space += "/"
//             if (mid > 0)
//                 space += "|".repeat(mid)
//             space += "\\"
//             space += String(line - 1).repeat(line - 1)
//         }
//     }
//     space += "\n"
// }
// console.log(space)