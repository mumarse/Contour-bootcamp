/* Create a function getmonth(month) in which create a list of ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] and check if the month is in the list if not throw error. 
Now when calling the function try the code where you are calling the function and get the value from <input> 
html tag and pass to the function. Catch the exception if the is an error. */

function getMonth(month){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    try{
        for(let i = 0; i < months.length; i++) {
            if (months[i] === month){
                return `${month} is in the list`;
            }
        }
        throw new Error(`&{month} is not in the list`);
    } catch (error) {
        return error.message
    }
}
console.log(getMonth('Jan'))