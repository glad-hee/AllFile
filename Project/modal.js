function modal () {
  const { body } = document;
  const frag = document.createDocumentFragment()
  // 모달 컨테이너
  const modalContainer = document.createElement('div')
  modalContainer.classList.add('modal-container');
  // 모달 헤더
  const mHeader = document.createElement('div');
  mHeader.classList.add('m-header');
  // 모달 헤더 - h3 태그
  const mSubtitle = document.createElement('h3');
  mSubtitle.classList.add('m-subtitle')
  mSubtitle.textContent = '쿠폰번호를 하단의 버튼을 눌러 입력해 주세요.'
  // 모달 헤더 - h1 태그
  const mTitle = document.createElement('h1');
  mTitle.classList.add('m-title');
  mTitle.textContent = '제품 교환권 / 모바일 쿠폰 / 바코드'
  mHeader.append(mSubtitle, mTitle);
  // 메인
  const mMain = document.createElement('div');
  mMain.classList.add('m-main');
  // 메인 - 이미지
  const mImg = document.createElement('div');
  mImg.classList.add('m-img');
  const img = document.createElement('img');
  img.setAttribute('src', 'http://place-hold.it/300x400');
  img.setAttribute('alt', '쿠폰 입력 가이드 사진')
  img.id = 'img';
  mImg.append(img);
// 메인 - 설명
  const mDesc = document.createElement('div');
  mDesc.classList.add('m-desc');
  mDesc.innerHTML = '* 8자리 혹은 12자리의 쿠폰번호를 입력해 주세요.';
  const mCN = document.createElement('input');
  mCN.classList.add('m-coupon-number');
  mCN.setAttribute('maxlength','8');
  mCN.setAttribute('type','text');
  mCN.setAttribute('readonly','');
  // mCN.innerHTML='&nbsp';
  //메인 - 넘버패드
  const mNumpad = document.createElement('div');
  mNumpad.classList.add('m-numpad');
  const clear = document.createElement('button');
  clear.textContent = 'CLEAR';
  clear.id = 'clear';
  mNumpad.append(clear);
  // 메인 - 넘바패드 - 버튼 들
  for (let i = 0; i < 10; i++) {
    const num = document.createElement('button');
    num.textContent = `${ i }`;
    num.id = `number-${ i }`;
    num.classList.add('numbers');
    mNumpad.append(num);
  }
  mMain.append(mImg, mDesc,mCN,mNumpad)
  // 취소/입력
  const mBtnWrap = document.createElement('div');
  mBtnWrap.classList.add('m-btn-wrap');

  const mBtn = document.createElement('div');
  mBtn.classList.add('m-btn')
  const cancel = document.createElement('button');
  cancel.id = 'cancel'
  cancel.textContent = '취소'
  mBtn.append(cancel);

  const mCloseBtn = document.createElement('div');
  mCloseBtn.classList.add('m-close-btn');
  const enter = document.createElement('button');
  enter.id = 'enter';
  enter.textContent = '쿠폰 번호 입력'
  mCloseBtn.append(enter);

  mBtnWrap.append(mBtn, mCloseBtn)

  modalContainer.append(mHeader, mMain, mBtnWrap);
  frag.append(modalContainer);
  body.append(frag);
}

modal();

const mCn = document.querySelector('.m-coupon-number')
const n0 = document.querySelector('#number-0');
let couponNumber = 0;





const numbers = document.querySelectorAll('.numbers')
const clearBtn = document.querySelector('#clear');
// console.log(numberPads)
console.log(mCn.value.length)
numbers.forEach((v,i)=> {
    v.addEventListener('click', function () {
      // console.log(v);
      if (mCn.value.length > 12) {
        mCn.value.substring(0, 11);
      } else {
        // 화면상의 쿠폰번호 출력
        mCn.value += this.textContent;
        // 데이터상의 쿠폰번호 이동
        couponNumber = mCn.value;

      }
      console.log(mCn.value.length);
    })
})
clearBtn.addEventListener('click',function(){
  mCn.value = '';
  couponNumber='';
})
