// const arr = []
// while (true) {
//   let a = prompt("enter command")
//   let massiv = a.split(", ")
//   if (massiv[0] == "add")
//   arr.push(massiv[1])
// }   else if (massiv[0] == "del") {
//   for (let i = 0; i < arr.length; i++) {
//       if (massiv[1] == arr[i]) {
//           arr.splice(i, 1)
//       }
//   }
// } else if (a == "stop") {
//   break
// }
// console.log(arr);

const arr = []
while (true) {
    let a = prompt("enter command")
    let massiv = a.split(", ")
    if (massiv[0] == "add") {
        arr.push(massiv[1])
    } else if (massiv[0] == "del") {
        for (let i = 0; i < arr.length; i++) {
            if (massiv[1] == arr[i]) {
                arr.splice(i, 1)
            }
        }
    } else if (a == "stop") {
        break
    }
    console.log(arr);
}
