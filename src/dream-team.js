const CustomError = class CustomError extends Error {
    constructor(message) {
        super(message);
        this._validationProp = 'NA';
    }
  };
  
  module.exports = CustomError;
module.exports = function createDreamTeam(members) {

    if(Array.isArray(members)) {
      return members.filter(member => typeof member === 'string').map(item => 
        item.trim().slice(0, 1).toUpperCase()).sort().join('');
      } else return false;
  };