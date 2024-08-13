//Literals Type
type Role =  "Admin" | "User"
let user:Role = "User"

function confirmDialog(answer:"yes"|"no") {
    console.log(`result = ${answer}`)
}
confirmDialog("yes")

//Template Lateral Type
type vertical = "top"|"middle"|"bottom"
type horizontal = "left"|"center"|"right"

type aligment = `${vertical}-${horizontal}`
