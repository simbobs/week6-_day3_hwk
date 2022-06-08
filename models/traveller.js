const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey)=>{
    return journey.startLocation;
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>{
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
      return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey)=> {
    return journey.distance > minDistance;
  });
    return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result =this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
    return result;

};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const results = this.journeys.map((journey) => {
    journey.transport;
  });

}
const uniqueArray = results.filter((result, index, self) => {
    self.indexOf(result) === index;
  });
  return uniqueArray;






//   const result = this.journeys.filter((journey, index, self) => {
//     const journeyTransport = journey.transport;
//     return self.indexOf(journeyTransport) === index;
//   }); 
//   return result;
// }
 



  // const unique = (value, index, result) => {
  //   return result.indexOf(value) === index;
  // };
  // return result.filter(unique);
    
  
 




// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// x(names); // 'John', 'Paul', 'George', 'Ringo'


module.exports = Traveller;
