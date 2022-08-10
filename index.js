let passwordlength = document.getElementById("passwordlength")
let password = document.getElementById("password")
let savebutton = document.getElementById("savebutton")

function generatepassword(length) {
    const loweralphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "`~!@#$%^&*()_+|}{:{?\-=]["

    const data = loweralphabet + upperalphabet + numeric + symbol
    let generator ='';
    for (let index = 0; index < length; index++) {
        generator += data[~~(Math.random() * data.length)];  
    }
    return generator
}

function getpassword(){
    const newpassword = generatepassword(passwordlength.value)
    password.value = newpassword
    alert('Udah dibuat')
}

function savepassword() {
    document.title = password.value
    savebutton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password anda: ${document.title}`))
    savebutton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('Tersimpan Seperti Koruptor')
    }, 800)
}