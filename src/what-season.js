const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
if(date == null) return 'Unable to determine the time of year!';
if(date instanceof Date == false) throw new Error('Invalid date!');

try {
  date.toLocaleString()
}
catch(e) {
  if(e) throw new Error('Invalid date!');
}

date = date.getMonth() + 1;

if(date >= 1 && date <= 2 || date === 12) return 'winter';
else if(date >=3 && date <= 5) return 'spring';
else if(date >=6 && date <= 8) return 'summer';
else if(date >=9 && date <= 11) return 'autumn';

}

module.exports = {
  getSeason
};
