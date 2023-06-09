// Script to show/display the divs based on the selection

// Get the select element
const select = document.getElementById("select");

// Listen for changes on the select element
select.addEventListener("change", function () {

    // Get the divs that correspond to each option
    const notionBannerDiv = document.getElementById("notion-banner-div");
    const birthdayDiv = document.getElementById("birthday-div");
    const congratsDiv = document.getElementById("congrats-div");
    const anniversaryDiv = document.getElementById("anniversary-div");

    // Hide all divs by adding the 'hidden' class to them
    notionBannerDiv.classList.add("hidden");
    birthdayDiv.classList.add("hidden");
    congratsDiv.classList.add("hidden");
    anniversaryDiv.classList.add("hidden");

    // Get the value of the selected option
    const selectedOption = select.value;

    // If 'option1' is selected, show the corresponding div by removing the 'hidden' class
    if (selectedOption === "notion-banner") {
        notionBannerDiv.classList.remove("hidden");
    }

    if (selectedOption === "birthday") {
        birthdayDiv.classList.remove("hidden");
    }

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

const notionBannerForm = document.getElementById('notion-banner-form');
const notionBannerSemiboldTextInput = document.getElementById('notion-banner-semibold-text');
const notionBannerLightTextInput = document.getElementById('notion-banner-light-text');
const notionBannerSemiboldTextOutput = document.getElementById('notion-banner-heading-semibold-text');
const notionBannerLightTextOutput = document.getElementById('notion-banner-heading-light-text');
const notionBannerDownloadButton = document.getElementById('notion-banner-download-button');


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


// Function to handle notion-banner-form submission
function handleNotionBannerFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const notionBannerSemiboldText = notionBannerSemiboldTextInput.value;
    const notionBannerLightText = notionBannerLightTextInput.value;

    // Set the text of div1
    notionBannerSemiboldTextOutput.textContent = notionBannerSemiboldText;
    notionBannerLightTextOutput.textContent = notionBannerLightText;
}



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
}

// Function to handle anniversary-form submission
function handleanniversaryFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const anniversaryEmployeeName = anniversaryEmployeeNameInput.value;
    const anniversaryImageUrl = anniversaryImageUrlInput.value;
    const anniversaryNumber = anniversaryNumberInput.value;

    // Set the text of div1
    anniversaryEmployeeNameOutput.textContent = anniversaryEmployeeName;
    anniversaryRightWrapper.style.backgroundImage = `url(${anniversaryImageUrl})`;


    if (anniversaryNumber === "1") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-01.svg"
    }

    if (anniversaryNumber === "2") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-02.svg"
    }

    if (anniversaryNumber === "3") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-03.svg"
    }

    if (anniversaryNumber === "4") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-04.svg"
    }

    if (anniversaryNumber === "5") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-05.svg"
    }

    if (anniversaryNumber === "6") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-06.svg"
    }

    if (anniversaryNumber === "7") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-07.svg"
    }

    if (anniversaryNumber === "8") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-08.svg"
    }

    if (anniversaryNumber === "9") {
        anniversaryNumberOutput.src = "https://raw.githubusercontent.com/george-yg9ea/george-yg9ea.github.io/30ca1431b6f826c6143f2353af7f935d71db9b3e/images/number-09.svg"
    }
}




// Function to handle download button click for notion banner.
function handleNotionBannerDownload() {
    // Get the notion banner element
    const notionBanner = document.getElementById('notion-banner');
    // Set the options for the image download
    const options = {
        width: notionBanner.offsetWidth * 2,
        height: notionBanner.offsetHeight * 2,
        style: {
            transform: 'scale(2)',
            transformOrigin: 'top left',
        },
    };

    // Use the dom-to-image library to create a jpeg image of the poster
    domtoimage.toJpeg(notionBanner, options)
        .then(function (dataUrl) {
            // Create a link element to download the image
            const link = document.createElement('a');
            link.download = 'notion-banner.jpeg';
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

notionBannerForm.addEventListener('submit', handleNotionBannerFormSubmit);
notionBannerDownloadButton.addEventListener('click', handleNotionBannerDownload);

birthdayForm.addEventListener('submit', handleBirthdayFormSubmit);
birthdayDownloadButton.addEventListener('click', handleBirthdayDownload);

congratsForm.addEventListener('submit', handleCongratsFormSubmit);
congratsDownloadButton.addEventListener('click', handleCongratsDownload);

anniversaryForm.addEventListener('submit', handleanniversaryFormSubmit);
// anniversaryDownloadButton.addEventListener('click', handleanniversaryDownload);