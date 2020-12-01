declare function Jquery(selector:string):void;
declare namespace Jquery{
	function ajax(url:string,setting?:any):void;
	namespace fn{
		function extend(object:any):void;
	}
}

