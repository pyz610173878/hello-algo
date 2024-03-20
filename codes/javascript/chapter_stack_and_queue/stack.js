/**
 * File: stack.js
 * Created Time: 2022-12-04
 * Author: S-N-O-R-L-A-X (snorlax.xu@outlook.com)
 */

/* Driver Code */
/* 初始化栈 */
// Javascript 没有内置的栈类，可以把 Array 当作栈来使用
const stack = [];

/* 元素入栈 */
// 入栈就是从栈的顶部开始存放
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log('栈 stack =', stack);


/* 访问栈顶元素 */
const peek = stack[stack.length - 1];
console.log('栈顶元素 peek =', peek);

/* 元素出栈 */
const pop = stack.pop();
console.log('出栈元素 pop =', pop);
console.log('出栈后 stack =', stack);

/* 获取栈的长度 */
const size = stack.length;
console.log('栈的长度 size =', size);

/* 判断是否为空 */
const isEmpty = stack.length === 0;
console.log('栈是否为空 =', isEmpty);



const stack1 = []

// 我们使用数组来模拟栈。因为栈是先入后出，所以数组的末尾就相当于栈的顶部。
// pop方法就是在数组的末尾添加元素。就相当于入栈.



// 入栈


// 出栈
// 数组末尾的索引值为-1，所以删除索引值为-1的元素即出栈。


