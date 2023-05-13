const quotes = [
  { quote: "나는 아무것도 바라지 않는다. 나는 아무것도 두려워하지 않는다. 나는 자유다", author: "니코스 카잔차키스" },
  { quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 믿는 대로 될 것이다", author: "헨리 포드" },
  { quote: "성공의 비결은 단 한 가지, 잘못된 것을 고치는 것이다", author: "톰 웨일러" },
  { quote: "당신이 어려운 상황에 처했을 때, 그것은 당신이 더 강해질 시간이다", author: "에릭 토머스" },
  { quote: "기회를 만들어라. 불가능한 것은 없다", author: "토니 로빈스" },
  { quote: "당신이 포기하지 않는 한, 실패는 아니다", author: "짐론" },
  { quote: "불가능은 그저 아직 해보지 않은 것일 뿐이다", author: "제임스 캐머론" },
  { quote: "성공은 준비된 마음이 만나기 좋은 기회일 뿐이다", author: "셔먼 F. 알더슨" },
  { quote: "당신이 세상을 바꿀 수 있지만, 먼저 그것부터 시작해야 한다", author: "넬슨 만델라" },
  { quote: "누구든 자신이 선택한 길을 걸어가기에 충분히 강하다", author: "찰스 케터링" },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `${todaysQuote.quote}.`
author.innerText = todaysQuote.author
