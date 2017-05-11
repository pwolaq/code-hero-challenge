module.exports = function(array, sum) {
    var map = {};
    var current;
    var diff;

    for(var i=0, length=array.length; i<length; i++){
        current = array[i];
        diff = sum - current;

        if (map.hasOwnProperty(diff)) {
            return [diff, current];
        }

        map[current] = true;
    }
    
    return undefined;
};
