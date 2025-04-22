var namee = document.getElementById("name")
var age = document.getElementById("age")
var male = document.getElementById("male")
var female = document.getElementById("female")
var course = document.getElementById("course")
var email = document.getElementById("email")
var contact = document.getElementById("contact")
var saveBtn = document.getElementById("savebtn")
var output = document.getElementById("output")


saveBtn.addEventListener("click",()=>{
    var tr = document.createElement("tr")
        output.append(tr)

        var nameinput = document.createElement("td")
        nameinput.textContent = namee.value
        tr.append(nameinput)

        var ageinput = document.createElement("td")
        ageinput.textContent = age.value
        tr.append(ageinput)

        var genderinput = document.createElement("td")
        genderinput.textContent = male.checked ? "Male" : (female.checked ? "Female" : "")
        tr.append(genderinput)

        var courseinput = document.createElement("td")
        courseinput = course.value
        tr.append(courseinput)

        var emailinput = document.createElement("td")
        emailinput.textContent = email.value
        tr.append(emailinput)

        var contactinput = document.createElement("td")
        contactinput.textContent = contact.value
        tr.append(contactinput)

        var deletecol = document.createElement("td")

        var deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"
        deletebtn.style.backgroundColor = "red"
        deletebtn.style.color = "white"
        deletecol.append(deletebtn)
        tr.append(deletecol)

        deletebtn.addEventListener("click", function (event) {
            tr.remove(event)
        })
    })

    // Disable save button initially

    saveBtn.disabled = true;

    // Function to check if all fields are filled
    let checkFields = () => {

        // Check if inputs are defined
        if (!namee || !age || !email || !course || !male || !female || !contact || !saveBtn) {
            console.warn("One or more form elements are not found.");
            return;
        }
    
        const genderSelected = male.checked || female.checked;
    
        const nameVal = namee.value?.trim() || "";
        const ageVal = age.value?.trim() || "";
        const emailVal = email.value?.trim() || "";
        const contactVal = contact.value?.trim() || "";
        const courseVal = course.value || "";
    
        const allFilled =
            nameVal !== "" &&
            ageVal !== "" &&
            emailVal !== "" &&
            contactVal !== "" &&
            courseVal !== "" &&
            genderSelected;
    
        saveBtn.disabled = !allFilled;
    };

    // Add listeners to all inputs

    const inputs = [namee, age, email, contact, course, male, female];

    console.log(inputs);
    
    inputs.forEach(input => {
        if (input && typeof input.addEventListener === "function") {
            input.addEventListener("input", checkFields);
            input.addEventListener("change", checkFields);
        } else {
            console.warn("Missing input element in HTML");
        }
    });

    checkFields();
