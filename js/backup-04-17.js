// Script to show/display the divs based on the selection

// Get the select element
const select = document.getElementById("select");

// Listen for changes on the select element
select.addEventListener("change", function () {

    // Get the divs that correspond to each option
    const birthdayDiv = document.getElementById("birthdayDiv");
    const congratsDiv = document.getElementById("congratsDiv");

    // Hide all divs by adding the 'hidden' class to them
    birthdayDiv.classList.add("hidden");
    congratsDiv.classList.add("hidden");

    // Get the value of the selected option
    const selectedOption = select.value;

    // If 'option1' is selected, show the corresponding div by removing the 'hidden' class
    if (selectedOption === "birthday") {
        birthdayDiv.classList.remove("hidden");
    }

    // If 'option2' is selected, show the corresponding div by removing the 'hidden' class
    if (selectedOption === "congrats") {
        congratsDiv.classList.remove("hidden");
    }

    // If 'select' is selected, hide all divs by adding the 'hidden' class to them
    if (selectedOption === "select") {
        birthdayDiv.classList.add("hidden");
        congratsDiv.classList.add("hidden");
    }
});





//   Script to apply the name and image to the poster

// Selecting the form element
const birthdayForm = document.querySelector('#birthday-form');
const congratsForm = document.querySelector('#congrats-form');




// Listening for the form submit event
congratsForm.addEventListener('submit', function (event) {
    // Preventing the default form submission behavior
    event.preventDefault();
    // Selecting the element that will display the employee name
const output = document.querySelector('.congrats-name');

// Selecting the element that will display the employee image
const rightWrapper = document.querySelector('.congrats-w');

    // Getting the employee name and image URL from the input fields
    const employeeNameInput = document.querySelector('#congrats-employee-name');
    const imageUrlInput = document.querySelector('#congrats-image-url');

    const employeeName = employeeNameInput.value;
    const imageUrl = imageUrlInput.value;
    // Setting the employee image as the background image of the right wrapper div
    // rightWrapper.style.backgroundImage = `url(${imageUrl})`;
    
    // Setting the employee name as the text content of the output element
    rightWrapper.style.backgroundImage = `url(${imageUrl})`;
    output.textContent = employeeName;
});

// Listening for the form submit event
birthdayForm.addEventListener('submit', function (event) {
    // Preventing the default form submission behavior
    event.preventDefault();
// Selecting the element that will display the employee name
const output = document.querySelector('#birthday-name');
console.log("working",output)

// Selecting the element that will display the employee image
const rightWrapper = document.querySelector('.birthday-w');
    // Getting the employee name and image URL from the input fields
    const employeeNameInput = document.querySelector('#birthday-employee-name');
    const imageUrlInput = document.querySelector('#birthday-image-url');

    const employeeName = employeeNameInput.value;
    const imageUrl = imageUrlInput.value;
    // Setting the employee image as the background image of the right wrapper div
    // rightWrapper.style.backgroundImage = `url(${imageUrl})`;
    
    // Setting the employee name as the text content of the output element
    rightWrapper.style.backgroundImage = `url(${imageUrl})`;
    output.textContent = employeeName;
});


// Script to convert the div to jpeg
const downloadButton = document.getElementById('downloadButton');
const poster = document.getElementsByClassName('poster')[0];

downloadButton.addEventListener('click', () => {
    // Use dom-to-image to take a screenshot of the poster element
    const options = {
        width: poster.offsetWidth * 2,
        height: poster.offsetHeight * 2,
        style: {
            transform: 'scale(2)',
            transformOrigin: 'top left',
        },
    };
    domtoimage.toJpeg(poster, options)
        .then(function (dataUrl) {
            // Create a link to download the image
            const link = document.createElement('a');
            link.download = 'birthday-poster.jpeg';
            link.href = dataUrl;

            // Click the link to trigger the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
});
