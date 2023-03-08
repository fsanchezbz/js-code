
// https://www.codecademy.com/paths/web-development/tracks/getting-started-with-javascript/modules/learn-javascript-functions/projects/sleep-debt-calculator

const getSleepHours = (day) =>{
  
    day = day.toLowerCase(); 
   
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 10;
      break;
    default:
    console.log('Plese insert one day like: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. Sunday')
    }
  };
  
  let ArrayDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
  
  const getActualSleepHours = () => {

  for ( let i = 0; i< ArrayDays.length; i++ ) {
       const total = 0;
       total = total + getSleepHours(ArrayDays[i]);
       return total;

    }  

  }

console.log(getActualSleepHours());



