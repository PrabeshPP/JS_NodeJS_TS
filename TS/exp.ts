//TypeAssertion in TypeScript
var str='1';
var str2:number=<number><any> str;
console.log(typeof(str2));
//