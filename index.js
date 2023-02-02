// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(place = 'go to the office') {
    return `This Monday, I will ${place}.`;
}
function wrapAdjective(flair = '*') {
   const innerFunction = function (adjective = ' special') {
    return`You are ${flair}${adjective}${flair}!`
   }
   return innerFunction;
}
   
    // let wrapAdjective = adjective('*');
    // return wrapAdjective('You are')(adjective