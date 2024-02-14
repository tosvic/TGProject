let EmailAdress= document.getElementById("email")
let password= document.getElementById("password")

function loginRequest(){
    const dataSent={
        title:EmailAdress.value,
        body:password.value
    }
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
           " Content-Type":"application/json"
        },
        body:JSON.stringify(dataSent)
    }).then(data =>{
        console.log(data);
    }).catch(error =>{
        console.log(error)
    })
    

}