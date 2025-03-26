const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {
        throw new Error('The number is low');//user-defined Exception
    }
   console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}