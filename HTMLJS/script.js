//function to handle 'name' input box
const handleNameClick = (event) => {
    event.preventDefault()
    const input = document.getElementById("name")
    const data = "Abhishek"
    input.value = data
}

//function to handle 'email' input box
const handleEmailClick = (event) => {
    event.preventDefault()
    const input = document.getElementById("email")
    const data = "abhishek.yadav@happiestminds.com"
    input.value = data
}

//function to handle 'message' input box
const handleMessageClick = (event) => {
    event.preventDefault()
    const input = document.getElementById("message")
    const data = "You are awesome😀"
    input.value = data
}

//function to handle 'submit' inputField
const handleSubmit = (event) => {
    event.preventDefault()
    alert("Form submitted, THANK YOU 😊😊")
    document.getElementById("basicForm").reset()
}

//toggleMode is used to toggle Dark Mode
const toggleMode = () => {
    document.body.style.backgroundColor = "rgb(16, 33, 48)"
    document.body.style.color = "white"


    const elements = document.querySelectorAll('.inputField');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'black';
        elements[i].style.color = 'white';
    }
    document.getElementById("mode").innerHTML = "Dark mode on"
}

//goToPage is used to go to provided URL page
function goToPage(pageURL) {
    window.location.href = pageURL
}

//---------------------Functions used in Exception Handling webpage--------------------------------------- 

//divide is used to divide the dividend by divisor with exception handling
function divide() {
    var dividend = parseFloat(document.getElementById('dividend').value);
    var divisor = parseFloat(document.getElementById('divisor').value);

    try {
        if (isNaN(dividend) || isNaN(divisor)) {
            throw new Error("Please enter valid numeric values.");
        }

        if (divisor === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        var result = dividend / divisor;
        document.getElementById('result').innerHTML = "Result: " + result;
    } catch (error) {
        document.getElementById('result').innerHTML = "An error occurred: " + error.message;
    }
}

//--------------------Functions used in Asynchronous webpage---------------------------------------------


//returns a Promise that represents the asynchronous operation.
async function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {

        // Inside the setTimeout() function, a delay of 2000 milliseconds (2 seconds) is set to simulate an asynchronous operation.
        setTimeout(() => {
            // Simulating an exception during the asynchronous operation
            try {
                // Generate a random number between 0 and 1
                const randomNumber = Math.random()

                console.log(randomNumber)
                if (randomNumber < 0.5) {
                    throw new Error("An error occurred during the asynchronous operation.");
                }

                // If no error occurs, the resolve() function is called with the success message "Asynchronous operation completed successfully."
                resolve("Asynchronous operation completed successfully.");
            } 

            // If an error occurs, the reject() function is called with the error object.
            catch (error) 
            {

                reject(error);
            }
        }, 2000);
    });
}

async function performAsyncOperation() {
    try {

        // await keyword is used to pause the code execution until the simulateAsyncOperation() 
        // function completes.
        const result = await simulateAsyncOperation();

        // The resolved value from simulateAsyncOperation() is assigned to the result variable.
        // The result is logged to the console and displayed in the HTML output using console.log() and document.getElementById().innerHTML.
        console.log(result);
        document.getElementById("output").innerHTML = result;
    }  

    // any error that occurs during the asynchronous operation is caught.
    catch (error) 
    {
        console.error("An error occurred:", error);
        document.getElementById("output").innerHTML = "An error occurred: " + error.message;
    } 


    finally {
        console.log("Async operation completed.");
    }
}

// The line const result = await simulateAsyncOperation(); in the performAsyncOperation() function will wait until the simulateAsyncOperation() function completes or resolves its Promise. In this specific example, the simulateAsyncOperation() function has a delay of 2 seconds (2000 milliseconds) set using the setTimeout() function.

// So, when performAsyncOperation() reaches the await keyword, it will pause the execution of the code and wait for approximately 2 seconds for the simulateAsyncOperation() function to finish. During this waiting period, other parts of the code can continue executing.

// After the 2-second delay, the simulateAsyncOperation() function will either resolve the Promise with a success message or reject it with an error, depending on the random number generated in the example.

// Once the simulateAsyncOperation() function completes, the value returned (either the success message or the error) will be assigned to the result variable, and the code execution will continue from that point.

// In summary, the await keyword in const result = await simulateAsyncOperation(); will pause the execution of the code in the performAsyncOperation() function until the simulateAsyncOperation() function finishes, and it will wait for approximately 2 seconds in this example.