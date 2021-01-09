// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
// ```jsx
// var nums = [100, 200, 300, 400, 500];
// ```

const nums = [100, 200, 300, 400, 500]
let answer

const itemRemove = (list, findItem) => {
    const idx = list.indexOf(findItem)
    if (idx > -1) {
        list.splice(idx, 1)
    } else {
        throw new Error("무언가 나쁜 일이 일어났어요!")
    }
}

try {
    itemRemove(nums, 400)
    itemRemove(nums, 500)
}
catch (e) {
    console.log(e)
}

answer = [...nums]
console.log(answer)