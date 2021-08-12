//const inventory =require ('./test/data').inventory;

//import inventory from "./test/data";


module.exports = {
    problem1 : function(inventory,n)
    {
        if(inventory.length==0)
        return [];
        else{
        for(let i=0;i<inventory.length;i++)
         {
            if(inventory[i].id==n)
            {
                return ("Car 33 is a "+inventory[i].car_year+ " "+inventory[i].car_make+" "+ inventory[i].car_model);
            }
        }
    }
    }
}

/*
export let problem1 = (inventory,n)=>
{
    for(var i=0;i<inventory.length;i++)
         {
            if(inventory[i].id==n)
            {
                return console.log("Car 33 is a "+inventory[i].car_year+ " "+inventory[i].car_make+" "+ inventory[i].car_model);
            }
        }
}

*/
