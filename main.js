const salary=(wage,hours,days) => {
    return wage*hours*days
}

const taxed = (amount,percentage) => {
    return amount*(1-percentage/100)
}

console.log(salary(300,8,20))
console.log(taxed(salary(300,8,20),15))

const znamenkovePole=document.querySelector('.znamenko')
const cislo1=document.querySelector('.cislo1')
const cislo2=document.querySelector('.cislo2')
const zaRovnitkem=document.querySelector('.zaRovnitkem')

document.querySelectorAll(".btn").forEach(n=>n.addEventListener("click",() => {
    if (znamenkovePole.textContent === "") {
        cislo1.textContent+=n.textContent
    } else {
        cislo2.textContent+=n.textContent
    }
}))

document.querySelectorAll(".btnZnamenko").forEach(n=>n.addEventListener("click",() => {
    console.log(znamenkovePole.textContent)
    if (znamenkovePole.textContent === "") {
        znamenkovePole.textContent+=n.textContent
    }
}))

document.querySelector('.rovnitko').addEventListener("click",() => {
    if (znamenkovePole.textContent==="+") {
        zaRovnitkem.textContent=Number(cislo1.textContent) + Number(cislo2.textContent)
    } else if (znamenkovePole.textContent==="-") {
        zaRovnitkem.textContent=Number(cislo1.textContent) - Number(cislo2.textContent)
    } else if (znamenkovePole.textContent==="*") {
        zaRovnitkem.textContent=Number(cislo1.textContent) * Number(cislo2.textContent)
    } else if (znamenkovePole.textContent==="/") {
        zaRovnitkem.textContent=Number(cislo1.textContent) / Number(cislo2.textContent)
    }
})

document.querySelector('.vymazat').addEventListener("click",() => {
    znamenkovePole.textContent=""
    cislo1.textContent=""
    cislo2.textContent=""
    zaRovnitkem.textContent=""
})