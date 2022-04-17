

const characters = ['@', '$', '#', "!", 'A', 'B']


    let counter = 0
    for(let i=0; i<characters.length;i++){
        if(password.value.includes(characters[i]) === false){
            // console.log("error")
            counter++
            console.log(characters[i], " - ", counter)
            // password.classList = "error"
        }
    }

    console.log("counter - ", counter)

    if(counter === characters.length){
        console.log("error 222")
    }else{
        console.log('password satisfies the conditions')
    }

    if(password.value === confirmPassword.value){
        document.querySelector('.container').innerHTML = `
        <p> thanks for submitting</p>
        `
    }