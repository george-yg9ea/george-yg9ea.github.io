// Script to show/display the divs based on the selection

// Get the select element
const select = document.getElementById("select");

// Listen for changes on the select element
select.addEventListener("change", function () {

    // Get the divs that correspond to each option
    const birthdayDiv = document.getElementById("birthday-div");
    const congratsDiv = document.getElementById("congrats-div");
    const anniversaryDiv = document.getElementById("anniversary-div");

    // Hide all divs by adding the 'hidden' class to them
    birthdayDiv.classList.add("hidden");
    congratsDiv.classList.add("hidden");
    anniversaryDiv.classList.add("hidden");

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

    if (selectedOption === "anniversary") {
        anniversaryDiv.classList.remove("hidden");
    }


    
    // If 'select' is selected, hide all divs by adding the 'hidden' class to them
    if (selectedOption === "select") {
        birthdayDiv.classList.add("hidden");
        congratsDiv.classList.add("hidden");
    }
});


// Get references to the HTML elements
const birthdayForm = document.getElementById('birthday-form');
const birthdayEmployeeNameInput = document.getElementById('birthday-employee-name');
const birthdayImageUrlInput = document.getElementById('birthday-image-url');
const birthdayNameOutput = document.getElementById('birthday-name');
const birthdayRightWrapper = document.getElementById('birthday-right-wrapper');
const birthdayDownloadButton = document.getElementById('birthday-download-button');

const congratsForm = document.getElementById('congrats-form');
const congratsEmployeeNameInput = document.getElementById('congrats-employee-name');
const congratsImageUrlInput = document.getElementById('congrats-image-url');
const congratsNameOutput = document.getElementById('congrats-name');
const congratsRightWrapper = document.getElementById('congrats-right-wrapper');
const congratsDownloadButton = document.getElementById('congrats-download-button');


const anniversaryForm = document.getElementById('anniversary-form');
const anniversaryEmployeeNameInput = document.getElementById('anniversary-employee-name');
const anniversaryNumberInput = document.getElementById('anniversary-number');
const anniversaryImageUrlInput = document.getElementById('anniversary-image-url');
const anniversaryEmployeeNameOutput = document.getElementById('anniversary-employee-name-output');
const anniversaryRightWrapper = document.getElementById('anniversary-right-wrapper');
const anniversaryNumberOutput = document.getElementById('anniversary-number-output');
const anniversaryDownloadButton = document.getElementById('anniversary-download-button');


// Function to handle birthday-form submission
function handleBirthdayFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const birthdayEmployeeName = birthdayEmployeeNameInput.value;
    const birthdayImageUrl = birthdayImageUrlInput.value;

    // Set the text of div1
    birthdayNameOutput.textContent = birthdayEmployeeName;
    birthdayRightWrapper.style.backgroundImage = `url(${birthdayImageUrl})`;
}

// Function to handle congrats-form submission
function handleCongratsFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const congratsEmployeeName = congratsEmployeeNameInput.value;
    const congratsImageUrl = congratsImageUrlInput.value;

    // Set the text of div1
    congratsNameOutput.textContent = congratsEmployeeName;
    congratsRightWrapper.style.backgroundImage = `url(${congratsImageUrl})`;

    if




}

// Function to handle anniversary-form submission
function handleanniversaryFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const anniversaryEmployeeName = anniversaryEmployeeNameInput.value;
    const anniversaryImageUrl = anniversaryImageUrlInput.value;

    // Set the text of div1
    anniversaryEmployeeNameOutput.textContent = anniversaryEmployeeName;
    anniversaryRightWrapper.style.backgroundImage = `url(${anniversaryImageUrl})`;
}


// Function to handle download button click for birthday poster.
function handleBirthdayDownload() {
    // Get the birthday poster element
    const birthdayPoster = document.getElementById('birthday-poster');
    // Set the options for the image download
    const options = {
        width: birthdayPoster.offsetWidth * 2,
        height: birthdayPoster.offsetHeight * 2,
        style: {
            transform: 'scale(2)',
            transformOrigin: 'top left',
        },
    };

    // Use the dom-to-image library to create a jpeg image of the poster
    domtoimage.toJpeg(birthdayPoster, options)
        .then(function (dataUrl) {
            // Create a link element to download the image
            const link = document.createElement('a');
            link.download = 'birthday-poster.jpeg';
            link.href = dataUrl;

            // Append the link to the body and click it to start the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(function (error) {
            // Log an error message if there is an issue with creating the image
            console.error('oops, something went wrong!', error);
        });
}


// Function to handle download button click for congrats poster.
function handleCongratsDownload() {
    // Get the congrats poster element.
    const congratsPoster = document.getElementById('congrats-poster');
    // Set the options for the downloaded image.
    const options = {
        width: congratsPoster.offsetWidth * 2,
        height: congratsPoster.offsetHeight * 2,
        style: {
            transform: 'scale(2)',
            transformOrigin: 'top left',
        },
    };
    // Convert the poster to a JPEG image using dom-to-image library.
    domtoimage.toJpeg(congratsPoster, options)
        .then(function (dataUrl) {
            // Create a link to download the image.
            const link = document.createElement('a');
            link.download = 'congrats-poster.jpeg';
            link.href = dataUrl;
            // Click the link to trigger the download.
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(function (error) {
            // Handle any errors that occur during the conversion.
            console.error('oops, something went wrong!', error);
        });
}



// Add event listeners to the forms
birthdayForm.addEventListener('submit', handleBirthdayFormSubmit);
birthdayDownloadButton.addEventListener('click', handleBirthdayDownload);

congratsForm.addEventListener('submit', handleCongratsFormSubmit);
congratsDownloadButton.addEventListener('click', handleCongratsDownload);

anniversaryForm.addEventListener('submit', handleanniversaryFormSubmit);
// anniversaryDownloadButton.addEventListener('click', handleanniversaryDownload);