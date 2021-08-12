// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
//Using the array you just obtained from the previous problem, 
//find out how many cars were made before the year 2000 and return the array of older cars and log its length.


// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
//Execute a function that will return an array from the dealer data containing 
//only the car years and log the result in the console as it was returned.


module.exports = {
    problem5 : function(inventory,n)
    {
        if(inventory.length==0)
        return [];
          let temp=0;
        for(var i=0;i<inventory.length;i++)
         {
                if(inventory[i]<n);
                temp++;
        }
        return (temp);
    }
}
