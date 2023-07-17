document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('nav ul li');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      navItems.forEach(function(item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
const guestbook = document.getElementById("guestbook");
const form = document.getElementById("guestbook-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const entries = document.getElementById("guestbook-entries");

// 방명록 전송 이벤트 처리
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 전송 기본 동작 방지

  const name = nameInput.value;
  const message = messageInput.value;

  // 방명록 항목 생성
  const entry = document.createElement("div");
  entry.classList.add("entry");
  entry.innerHTML = `<strong>${name}</strong>: ${message}`;

  // 방명록에 항목 추가
  entries.appendChild(entry);

  // 입력 필드 초기화
  nameInput.value = "";
  messageInput.value = "";
});

// 이전 코드 생략
