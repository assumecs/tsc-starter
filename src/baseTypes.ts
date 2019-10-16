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

 let x: any = 1
 x = 'I am who i am'
 x = false

 x.ifItExists()
 x.toFixed()

 let arrayList: any[] = [1, false, 'fine']
 arrayList[1] = 100