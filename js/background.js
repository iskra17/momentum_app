const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

const bgDiv = document.createElement("div")
bgDiv.classList.add("background")
document.body.appendChild(bgDiv)

function changeBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)]
  const url = `url(img/${chosenImage})`

  // 새로운 Image 객체를 생성
  let img = new Image()

  // 이미지 로딩이 끝나면 실행할 콜백 함수를 설정
  img.onload = function () {
    // 이미지 로딩이 끝나면 bgDiv의 배경 이미지를 변경
    bgDiv.style.background = `${url} no-repeat center center`
    bgDiv.style.backgroundSize = "cover"
  }

  // 이미지 로딩 시작
  img.src = `img/${chosenImage}`
}

changeBackground()

setInterval(changeBackground, 10000)
