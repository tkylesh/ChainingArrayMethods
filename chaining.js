var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chain = integers.sort(function(first,second)
	{return second-first;}).filter(function(int) { return int <= 19; })
	.reduce(function(previousValue,currentValue, array){
	return (previousValue*1.5)+(currentValue*1.5)});

console.log(Math.floor(chain));

