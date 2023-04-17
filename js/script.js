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


// Get references to the HTML elements
const birthdayForm = document.getElementById('birthday-form');
const birthdayEmployeeNameInput = document.getElementById('birthday-employee-name');
const birthdayImageUrlInput = document.getElementById('birthday-image-url');
const birthdayNameOutput = document.getElementById('birthday-name');
const birthdayRightWrapper = document.getElementById('birthday-right-wrapper');

const congratsForm = document.getElementById('congrats-form');
const congratsEmployeeNameInput = document.getElementById('congrats-employee-name');
const congratsImageUrlInput = document.getElementById('congrats-image-url');
const congratsNameOutput = document.getElementById('congrats-name');
const congratsRightWrapper = document.getElementById('congrats-right-wrapper');

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

// Add event listeners to the forms
birthdayForm.addEventListener('submit', handleBirthdayFormSubmit);
congratsForm.addEventListener('submit', handleCongratsFormSubmit);











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
