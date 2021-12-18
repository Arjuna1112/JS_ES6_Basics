//Using Template Literal, Object destructure print new city, state and country

/**
 * function addressMaker(address){
 *      const newAddress = {
 *          city:address.city,
 *          state:address.state,
 *          country:'USA'
 *      }
 * }
 * 
 * addressMaker(city:'Austin',state:'Texas')
 */

//Solution

function addressMaker(address){
    //using object destructure
    const {city,state}=address
    const newAddress = {
        city,state,country:'USA'
    }
    console.log(`${newAddress.city} && ${newAddress.state} && ${newAddress.country}`);
}

addressMaker({city:'Austin',state:'Texas'});