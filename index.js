let score = 0;
let answer;
const scoreEl = document.querySelector('.score-count');
const rgbCodeEl = document.querySelector('.rgb-code');
const rightEl = document.querySelector('.right');
const wrongEl = document.querySelector('.wrong');


function rgbColor(){ // 랜덤한 컬러 코드 생성
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `RGB(${r},${g},${b})`
}

const options = [rgbColor(), rgbColor(), rgbColor()]; // 랜덤컬러 세가지가 들어간 배열 생성
function newStage(){ // 화면을 그리는 함수
  document.querySelectorAll('.rgb-option').forEach((optionEl, index) => { //rgb-option을 노드리스트로 만들어서 foreach 
    optionEl.style.backgroundColor = options[index] // optionEl마다 랜덤컬러를 스타일로 지정
  })
  answer = Math.floor(Math.random() * 3) // 정답이 될 컬러가 있는 인덱스를 랜덤으로 설정

  rgbCodeEl.textContent = options[answer]

  scoreEl.textContent=score;

}

document.querySelectorAll('.rgb-option').forEach((optionEl, index) => {
  optionEl.addEventListener('click', e =>{
    if ( answer === index){
      score++;
      rightEl.classList.add('on');
      rightEl.style.backgroundColor = options[index];
    }else{
      score = 0;
      wrongEl.classList.add('on');
      wrongEl.style.backgroundColor = options[index];
    }
  })
})

newStage();