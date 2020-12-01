function getLength(something:string|number):number{
	if((something as String).length){
		return (something as String).length;
	}else{
		return something.toString().length;
	}
}