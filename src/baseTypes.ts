/**
 * 基础类型
 * any 任意类型
 * number 双精度 64 位浮点数值
 * string 单引号、双引号、反引号 字符串 反引号可多行可内嵌表达式
 * boolean 布尔类型 表示逻辑值
 * 数组类型 类型[]: number[] string[]
 * 元祖 已知元素数量和类型的数组 let x: [string, number]
 * enum 枚举定义数值集合 enum Color {Red, Green, Blue}; let c: Color = Color.Blue
 * void 方法无返回值 function fun(): void {}
 * null 表示对象值缺失
 * undefined 用于初始化变量为一个未知的值
 * never 其他类型(包括null 和 undefined) 表示从不会出现的值
 */

 /** any
 let x: any = 1
 x = 'I am who i am'
 x = false

// console.log(x.ifItExists()) // ifItExists is not a function
x = 4
console.log(x.toFixed(2))

 let arrayList: any[] = [1, false, 'fine']
 arrayList[1] = 100

  */


  /* Null 和 Undefined
  // 启用 --strictNullChecks // 严格的空校验
  let x: number;
  x = 1;
  // x = undefined;
  // x = null;

  // 启用 --strictNullChecks
  let y: number | null | undefined;
  y = 1;
  y = undefined;
  y = null;

  */


  /** never 类型 */
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
// x = 123;

// 运行正确，never 类型可以赋值给 never 类型
x = (() => { throw new Error('exception')})();
// x = new Error('exception'); // Type 'Error' is not assignable to type 'never'.

// 运行正确，never 类型可以赋值给 数字类型
y = (() => { throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) {}
}