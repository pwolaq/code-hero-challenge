function factory(number){
    return function() {
        return arguments.length ? arguments[0].call(null, number) : number;
    };
}

module.exports = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce(function(acc, item, index){
    acc[item] = factory(index);
    return acc;
}, {
    plus: function(a) {return function(b){return b+a}},
    minus: function(a) {return function(b){return b-a}},
    times: function(a) {return function(b){return b*a}},
    dividedBy: function(a) {return function(b){return b/a}}
});
