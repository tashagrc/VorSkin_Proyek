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

    let errorName = document.getElementById("errorName")
    let errorAddress = document.getElementById("errorAddress")
    let errorPhone = document.getElementById("errorPhone")
    let errorEmail = document.getElementById("errorEmail")
    let errorPassword = document.getElementById("errorPassword")
    let errorConfirmPassword = document.getElementById("errorConfirmPassword")
    let errorPreference = document.getElementById("errorPreference")
    let errorNews = document.getElementById("errorNews")
    let errorTerms = document.getElementById("errorTerms")

    // halaman login

    let loginform = document.getElementById("loginform")
    let loginemail = document.getElementById("login-email")
    let loginpwd = document.getElementById("login-pwd")

    let errorLoginEmail = document.getElementById("errorLoginEmail")
    let errorLoginPwd = document.getElementById("errorLoginPwd")

    let errName = []
    let errEmail = []
    let errAddress = []


    subsform.addEventListener("submit", (e)=>{
        errorSubs = []
        errorName.innerText = ''
        errorAddress.innerText = ''
        errorPhone.innerText = ''
        errorEmail.innerText = ''
        errorPassword.innerText = ''
        errorConfirmPassword.innerText = ''
        errorPreference.innerText = ''
        errorNews.innerText = ''
        errorTerms.innerText = ''

        validateName()
        validateEmail()
        validateAddress()
        validateAgreement()
        validatePhone()
        validatePassword()
        validateConfirmPassword()
        validatePreference()
        validateNews()

        
        if(errorSubs.length > 0)
        {
            for(err of errorSubs)
            {
                errorMessages.innerText += err + '\n'
            }
            // biar form ga disubmit
            e.preventDefault()
        }
        else 
        {
            alert('form is submitted')
        }
    })

    function isEmpty(value)
    {
        if(value === '')
        {
            return true
        } return false
    }

    function validateName()
    {
        let fname = firstname.value.trim()
        let lname = lastname.value.trim()
        if(isEmpty(fname) || isEmpty(lname))
        {
            error.push("Name field must be filled")
        }
    }

    function validateEmail()
    {
        let value = email.value.trim()
        if(isEmpty(value))
        {
            error.push("Email field must be filled")
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
                error.push("Email must contain only one '@'")
            }

            let end = ".com"
            let j = 0
            for(let i = (value.length - end.length); i < value.length; i++)
            {
                if(end[j] != value[i])
                {
                    error.push("Email must end with .com")
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
            error.push("Address field must be filled")
        }
    }

    function validatePhone()
    {
        let value = phone.value.trim()
        if(isEmpty(value))
        {
            error.push("Phone field must be filled")
        }
        else
        {
            if(isNaN(value) == true) // not number
            {
                error.push("Phone must only contain number")
            }
        }
    }

    function validatePassword()
    {
        let value = password.value.trim()
        if(isEmpty(value))
        {
            error.push("Password field must be filled")
        }
        else
        {
            if(value.length < 8)
            {
                error.push("Password must be at least 8 characters")
            }
        }
    }

    function validateConfirmPassword()
    {
        let value = confirmpassword.value.trim()
        if(isEmpty(value))
        {
            error.push("Confirm Password field must be filled")
        }
        else
        {
            if(password != confirmpassword)
            {
                error.push("Passwords did not match")
            }
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
        error.push("Preference must be chosen")
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
        error.push("News subcription preference must be chosen")
    }

    function validateAgreement()
    {
        if(terms.checked)
        {
            return
        }
        error.push("You must consent to Personal Data Policy")
    }
}