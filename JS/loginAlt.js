function handleSubmit(e)
{
    console.log(e);
    e.preventDefault();
    const form=document.querySelector("#sign-up-form");
    console.log(form);
    //  container.classList.remove("sign-up-mode");
    
    const el=form.elements;
    const value= document.getElementById("reg-username").value;
    const email= el[1];
    if(value)
    {
        console.log(form);
    
    }
    else
    {
        console.log("name is empty");
    }
}
function handleInputChange(e, inputID)
{
    const value=document.getElementById("reg-username");
}

document.querySelector("#sign-up-form").onsubmit=(e)=>handleSubmit(e);