// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const input = "3 7"
const a = input.split(" ")[0]
const b = input.split(" ")[1]

console.log(a ** b)