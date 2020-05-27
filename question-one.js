var x=0;
var arr=[]
let input=[]

const take=()=>{
	arr[x]=document.querySelector(".input").value;
	document.querySelector(".input").value="";
	input.push(arr[x]);
	x++;

}

const done=()=>{
	input.sort(function(a,b){
		return a-b;
	})
	console.log(input);
}