const numerator = 100, denominator = 10;
try {
    console.log(numerator/denominator);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}