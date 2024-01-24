import { isVaildEmail } from "../utils/isVaildEmail";

// 이메일, 비밀번호 input 선택
const emailInputBox = document.querySelector("#email-inputbox");
const pwInputBox = document.querySelector("#pw-inputbox");

// 로그인 버튼 선택
const loginBtn = document.querySelector("#login-button");

// 눈 모양 아이콘 선택
const passwordOnoff = document.querySelector("#password-onoff");

function checkEmail(event) {
  // errorMessage가 출력될 태그, input 태그 선택
  const emailValue = event.target.value.trim();
  const errorMessage = document.querySelector("#email-error-message");

  if (emailValue === "") {
    // 공백일 경우
    errorMessage.innerHTML = "이메일을 입력해주세요.";
    emailInputBox.classList.add("error-box");
  } else if (emailRegex.test(emailValue)) {
    // 유효한 경우, .error-box 클래스 제거
    errorMessage.innerHTML = "";
    emailInputBox.classList.remove("error-box");
  } else {
    // 유효하지 않은 경우
    errorMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
    emailInputBox.classList.add("error-box");
  }
}

function checkPassword(event) {
  // input에 입력된 값, errorMessage가 출력될 태그, input 태그 선택
  const passwordValue = event.target.value;
  const errorMessageBox = document.querySelector("#pw-error-message");
  // 공백일 경우
  if (passwordValue === "") {
    errorMessageBox.innerHTML = "비밀번호를 입력해주세요.";
    pwInputBox.classList.add("error-box");
  } else if (passwordValue !== "") {
    errorMessageBox.innerHTML = "";
    pwInputBox.classList.remove("error-box");
  }
}

// 로그인 시도
function tryLogin() {
  const emailValue = emailInputBox.value;
  const passwordValue = pwInputBox.value;
  const errorMessage = document.querySelector("#email-error-message");
  const errorMessageBox = document.querySelector("#pw-error-message");

  // 입력값이 모두 맞는 경우
  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "folder.html";
  } else if (emailValue != "test@codeit.com" || passwordValue != "codeit101") {
    // 아이디가 틀리거나, 비밀번호가 틀리는 경우
    errorMessage.innerHTML = "이메일을 확인해주세요.";
    emailInputBox.classList.add("error-box");
    errorMessageBox.innerHTML = "비밀번호를 확인해주세요";
    pwInputBox.classList.add("error-box");
  }
}

// 엔터키로 로그인 시도
function loginByEnter(event) {
  // event.key 값이 "Enter"일 때만 tryLogin 함수 호출
  if (event.key === "Enter") {
    tryLogin();
  }
}

/** [심화] 눈 모양 아이콘 클릭시, 비밀번호 타입 변경하기 **/
function pwOnoff() {
  if (pwInputBox.getAttribute("type") === "password") {
    passwordOnoff.setAttribute("src", "./images/logo_icon/eye_icon.png");
    passwordOnoff.setAttribute("alt", "비밀번호 보기");
    pwInputBox.setAttribute("type", "text");
  } else if (pwInputBox.getAttribute("type") === "text") {
    passwordOnoff.setAttribute("src", "./images/logo_icon/hidden_eye_icon.png");
    passwordOnoff.setAttribute("alt", "비밀번호 숨김");
    pwInputBox.setAttribute("type", "password");
  }
}

/** 이벤트 등록 */
// 이메일, 비밀번호 올바른지 확인
emailInputBox.addEventListener("focusout", checkEmail);
pwInputBox.addEventListener("focusout", checkPassword);

// 로그인하거나, "확인해주세요" 띄우기
loginBtn.addEventListener("click", tryLogin);

// 엔터키로 로그인하기
document.addEventListener("keydown", loginByEnter);

// 눈 모양 아이콘 클릭시
passwordOnoff.addEventListener("click", pwOnoff);
