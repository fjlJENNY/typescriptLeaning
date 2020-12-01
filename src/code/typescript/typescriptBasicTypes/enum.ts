enum Days {Sun , Mon , Tue , Wed , Thu , Fri , Sat};

enum Color {Red, Green, Blue = "blue".length};

// enum Color2 {Red = 'red'.length, Green}

const enum Directions {
	Up,
	Down,
	Left,
	Right
}

let directions = [Directions.Up , Directions.Down , Directions.Left , Directions.Right];



// 枚举 包含  手动赋值 ， 
// 普通枚举 ， 还有常数枚举