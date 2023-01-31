function calculate(s) {
  const n = s.length
  const num = []
  const op = []
  let temp = -1
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      continue
    }
    // 遍历字符串的每个元素 
    // 数字进行累加
    if (isNumber(s[i])) {
      if (temp === -1) {
        temp = parseInt(s[i]) 
      } else {
        temp = temp * 10 + parseInt(s[i]) 
      }
    } else {
      // 将数字入栈
      if (temp !== -1) {
        num.push(temp)
        temp = -1
      }
      // 遇到操作符
      while (op.length > 0) {
        //遇到更低优先级的话就结束
        if (compare(s[i], op[op.length - 1])) {
          break
        }
        // 不停的出栈，进行运算，并将结果再次压入栈中
        const num1 = num.pop()
        const num2 = num.pop()
        num.push(calc(num1, num2, op.pop()))
      }
      // 当前运算符入栈
      op.push(s[i])
    }
  }
  if (temp !== -1) {
    num.push(temp)
  }
  // 将栈中的其他元素继续运算
  while (op.length > 0) {
    const num1 = num.pop()
    const num2 = num.pop()
    num.push(calc(num1, num2, op.pop()))
  }
  return num.pop()
}

function compare(op1, op2) {
  if (op1 === '*' || op1 === '/') {
    return op2 === '+' || op2 === '-'
  }
  return false
}

function isNumber(c) {
  return c >= '0' && c <= '9'
}
function calc(a, b, op) {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return b - a
    case '*':
      return a * b
    case '/':
      return b / a
  }
  return 0
}

console.log(calculate('2+3*5'))
// 屏幕结果
let showResult = document.getElementById("result");
console.log(showResult.innerText);
// 清屏按钮
let claer = document.getElementById("clearBtn");
// 退格按钮
let del = document.getElementById("delBtn");
// 等号按钮 
let equal = document.getElementById("equal");
// 定义三个变量 用于保存2个数字和操作符
let numValue1 = "";
let numValue2 = "";
let oper = "";
let display = "";
let nums = document.getElementsByClassName("btn")
for (let i = 0;i<nums.length;i++) {
  nums[i].onclick = function(){
    // 
    display = display + this.innerHTML;
    // 更改res的现实结果    num * 1 去除无效0
    showResult.innerText = display;
  }
}

let operators = document.getElementsByClassName("operator");
for (let i = 0; i<operators.length;i++){
  operators[i].onclick = function(){
    display = display + this.innerText;
    showResult.innerText = display;
    
  }
}

equal.onclick = function(){

  display = calculate(display);
  showResult.innerText = display; 
}
claer.onclick = function(){
  display = "";
  showResult.innerText = 0;
}
