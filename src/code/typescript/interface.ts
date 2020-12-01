interface Person {
    id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

export let tom: Person = {
	id:3,
    name: 'Tom',
    gender: 'male'
};
