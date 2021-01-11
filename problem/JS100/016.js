// 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// ```jsx
// **입출력**

// 입력 : 거꾸로
// 출력 : 로꾸거
// ```

const input = "거꾸로"

let answer = ""

for (let i = input.length - 1; i >= 0; i--) {
    answer += input[i]
}
console.log(answer)