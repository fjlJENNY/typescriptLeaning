// type aliases
type Name = string;
type NameResolver = () => string ;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver):Name{
	if(typeof n === 'string'){
		return n;
	}
	return n();
}

// type aliases with string 

type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele:Element , eleType : EventNames){
	
}
