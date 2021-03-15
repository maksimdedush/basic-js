const CustomError = class CustomError extends Error {
    constructor(message) {
        super(message);
        this._validationProp = 'NA';
    }
  };
  
  module.exports = CustomError;
  module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let speed = turnsSpeed / 3600;
    let sec = Math.floor(turns / speed);
  
    return {
      turns: turns,
      seconds: sec,
    };
  };