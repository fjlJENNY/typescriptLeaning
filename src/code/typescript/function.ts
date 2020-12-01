function sum(x:number , y:number = 0):number{
	return x + y;
}

let mySum : (x:number , y:number) => number = function(x:number , y:number) : number{
	return x + y;
}

let mySum2 : (x: number, y: number) => number = function(x:number , y:number) : number{
	return x + y;
}


// function push(array: any[], ...items:any[]) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }

// let aa:any[] = [];
// push(aa, 1, 2, 3);


function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string) : number|string {
	if(typeof x === 'number'){
		return  x;
	}else {
		return x;
	}
	
}