window.onload = ()=>{

    // halaman subscribe
    let subsform = document.getElementById("subsform")
    let firstname = document.getElementById("fname")
    let lastname = document.getElementById("lname")
    let address = document.getElementById("address")
    let phone = document.getElementById("phone")
    let email = document.getElementById("email")
    let password = document.getElementById("pwd")
    let confirmpassword = document.getElementById("cpwd")
    let preference = document.getElementsByName("preference") // return collection
    let news = document.getElementsByName("news")
    let terms = document.getElementById("terms")

    let errorFirstName = document.getElementById("errorFirstName")
    let errorLastName = document.getElementById("errorLastName")
    let errorAddress = document.getElementById("errorAddress")
    let errorPhone = document.getElementById("errorPhone")
    let errorEmail = document.getElementById("errorEmail")
    let errorPassword = document.getElementById("errorPassword")
    let errorConfirmPassword = document.getElementById("errorConfirmPassword")
    let errorPreference = document.getElementById("errorPreference")
    let errorNews = document.getElementById("errorNews")
    let errorTerms = document.getElementById("errorTerms")


    // error subscribe variable
    let errFirstName = []
    let errLastName = []
    let errEmail = []
    let errAddress = []
    let errPhone = []
    let errPassword = []
    let errCpwd = []
    let errPref = []
    let errNews = []
    let errTerms = []

    subsform.addEventListener("submit", (e)=>{
        errFirstName = []
        errLastName = []
        errEmail = []
        errAddress = []
        errPhone = []
        errPassword = []
        errCpwd = []
        errPref = []
        errNews = []
        errTerms = []

        errorFirstName.innerText = ''
        errorLastName.innerText = ''
        errorAddress.innerText = ''
        errorPhone.innerText = ''
        errorEmail.innerText = ''
        errorPassword.innerText = ''
        errorConfirmPassword.innerText = ''
        errorPreference.innerText = ''
        errorNews.innerText = ''
        errorTerms.innerText = ''

        validateFirstName()
        validateLastName()
        validateEmail()
        validateAddress()
        validateAgreement()
        validatePhone()
        validatePassword()
        validateConfirmPassword()
        validatePreference()
        validateNews()

        if(errFirstName.length > 0 || errLastName.length > 0 || errEmail.length > 0 || errAddress.length > 0 || errPhone.length > 0 || errPassword.length > 0 || errCpwd.length > 0 || errPref.length > 0 || errNews.length > 0 || errTerms.length > 0)
        {
            if(errFirstName.length > 0)
            {
                for(err of errFirstName)
                {
                    errorFirstName.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errLastName.length > 0)
            {
                for(err of errLastName)
                {
                    errorLastName.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errEmail.length > 0)
            {
                for(err of errEmail)
                {
                    errorEmail.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errAddress.length > 0)
            {
                for(err of errAddress)
                {
                    errorAddress.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errPhone.length > 0)
            {
                for(err of errPhone)
                {
                    errorPhone.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errPassword.length > 0)
            {
                for(err of errPassword)
                {
                    errorPassword.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errCpwd.length > 0)
            {
                for(err of errCpwd)
                {
                    errorConfirmPassword.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errPref.length > 0)
            {
                for(err of errPref)
                {
                    errorPreference.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errNews.length > 0)
            {
                for(err of errNews)
                {
                    errorNews.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
            if(errTerms.length > 0)
            {
                for(err of errTerms)
                {
                    errorTerms.innerText += err + '\n'
                }
                // biar form ga disubmit
                e.preventDefault()
            }
        }
        else 
        {
            alert('Subscribed! Thank you for registering')
        }
    })


    function isEmpty(value)
    {
        if(value === '')
        {
            return true
        } return false
    }

    // subscribe function

    function validateFirstName()
    {
        let value = firstname.value.trim()
        if(isEmpty(value))
        {
            errFirstName.push("First Name field must be filled")
        }
    }

    function validateLastName()
    {
        let value = lastname.value.trim()
        if(isEmpty(value))
        {
            errLastName.push("Last Name field must be filled")
        }
    }

    function validateEmail()
    {
        let value = email.value.trim()
        if(isEmpty(value))
        {
            errEmail.push("Email field must be filled")
        }
        else
        {
            let a = 0
            let count = 0
            while(a < value.length)
            {
                if(value[a] == '@')
                {
                    count++
                }
                a++
            }

            if(count != 1)
            {
                errEmail.push("Email must contain only one '@'")
            }

            let end = ".com"
            let j = 0
            for(let i = (value.length - end.length); i < value.length; i++)
            {
                if(end[j] != value[i])
                {
                    errEmail.push("Email must end with .com")
                    break
                }
                j++
            }
        }
        
    }

    function validateAddress()
    {
        let value = address.value.trim()
        if(isEmpty(value))
        {
            errAddress.push("Address field must be filled")
        }
    }

    function validatePhone()
    {
        let value = phone.value.trim()
        if(isEmpty(value))
        {
            errPhone.push("Phone field must be filled")
        }
        else if(isNaN(value) == true) // not number
        {
            errPhone.push("Phone must only contain number")
        }
    }

    function validatePassword()
    {
        let value = password.value.trim()
        if(isEmpty(value))
        {
            errPassword.push("Password field must be filled")
        }
        
        else if(value.length < 8)
        {
            errPassword.push("Password must be at least 8 characters")
        }
       
    }

    function validateConfirmPassword()
    {
        let valueConfirm = confirmpassword.value.trim()
        let valuePassword = password.value.trim()
        if(isEmpty(valueConfirm))
        {
            errCpwd.push("Confirm Password field must be filled")
        }
        else if(valuePassword != valueConfirm)
        {
            errCpwd.push("Passwords did not match")
        }
    }

    function validatePreference()
    {
        for(a of preference) // collection
        {
            if(a.checked)
            {
                return
            }
        }
        errPref.push("Preference must be chosen")
    }

    function validateNews()
    {
        for(a of news) // collection
        {
            if(a.checked)
            {
                return
            }
        }
        errNews.push("News subcription preference must be chosen")
    }

    function validateAgreement()
    {
        if(terms.checked)
        {
            return
        }
        errTerms.push("You must consent to Personal Data Policy")
    }
}

