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
const form = document.querySelector('form');
const output = document.querySelector('#output');
const rightWrapper = document.querySelector('.right-wrapper');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const employeeNameInput = document.querySelector('#employee-name');
    const imageUrlInput = document.querySelector('#image-url');

    const employeeName = employeeNameInput.value;
    const imageUrl = imageUrlInput.value;

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
