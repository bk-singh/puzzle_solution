/*
Author: BAL KRISHN SINGH
Created: 28th March 2018
exection steps: (1) open command prompt (2) goto directory where file "Que2Hotel.js" exists (3)run the code "node Que2Hotel.js"

*/


var input = "Rewards: 2018-03-22, 2018-03-23, 2018-03-24"; // input as a string

var type = input.split(':')[0];
var dates = input.split(':')[1].split(',');
var days = dates.map(d => {aDate = new Date(d); return aDate.getDay()});

var weekDays=[1,2,3,4,5], weekEnd= [0,6]; 

// list of hodel details
var hotels = [
	
		{"name":"Lakewood", "isRewards": false, "isWeekEndPrice":false, "price":110},
		{"name":"Lakewood", "isRewards": true,  "isWeekEndPrice":false, "price":80},
		{"name":"Lakewood", "isRewards": false, "isWeekEndPrice":true, "price":90},
		{"name":"Lakewood", "isRewards": true,  "isWeekEndPrice":true, "price":80},

		{"name":"Bridgewood", "isRewards": false,  "isWeekEndPrice": false, "price":160},		
		{"name":"Bridgewood", "isRewards": true,  "isWeekEndPrice": false, "price":110},	
		{"name":"Bridgewood", "isRewards": false,  "isWeekEndPrice": true, "price":60},		
		{"name":"Bridgewood", "isRewards": true,  "isWeekEndPrice": true, "price":50},		

		{"name":"Ridgewood", "isRewards": false,  "isWeekEndPrice":false, "price":220},
		{"name":"Ridgewood", "isRewards": true,   "isWeekEndPrice":false, "price":100},
		{"name":"Ridgewood", "isRewards": false,  "isWeekEndPrice":true, "price":150},
		{"name":"Ridgewood", "isRewards": true,   "isWeekEndPrice":true, "price":40}
	];
	
	function minPriceObj(prev,cur){
					return prev.price< cur.price? prev: cur;
			}
var data = days.map(
	aDay => {
			var hotelsType = hotels.filter(function(aHotel){
                                                        if(type.toLocaleLowerCase() == "Rewards".toLocaleLowerCase())                                                         
															return aHotel.isRewards;														
                                                        return !aHotel.isRewards;
                                                    });
			
			var hotelsCutomer = hotelsType.filter(function(anHotel){														
                                                        if(!weekDays.includes(aDay))															
                                                            return anHotel.isWeekEndPrice;
														else
															return !anHotel.isWeekEndPrice;
															
			                                        }); 					
   			return hotelsCutomer.reduce(minPriceObj);
});
var minPriceHotel = data.reduce(minPriceObj);
console.log("OUTPUT:: ",minPriceHotel.name);