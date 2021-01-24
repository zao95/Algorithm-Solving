// 문제56 : 객체의 함수 응용

// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// ```jsx
// **데이터**
// nationWidth = {
//      'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }

// **출력**
// England 22023
// ```


const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

const temp = ["", null]
for (let i in nationWidth) {
    if (i === "korea") {
        continue
    }
    const diff = Math.abs(nationWidth["korea"] - nationWidth[i])
    console.log(temp[1], temp[1] > diff)
    if (temp[1] === null || temp[1] > diff) {
        temp[0] = i
        temp[1] = diff
    }
    console.log(temp)
}

const answer = temp.join(" ")
console.log(answer)