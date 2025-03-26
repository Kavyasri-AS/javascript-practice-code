let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

dailyActivities.pop();			//Remove the last element
console.log(dailyActivities);   //['work', 'eat', 'sleep']

const removedElement = dailyActivities.pop();
console.log(removedElement); 			//'sleep'
console.log(dailyActivities);  			//['work', 'eat']