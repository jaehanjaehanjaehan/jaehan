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

// 방명록 메시지를 저장할 배열
let guestbookMessages = [];

// DOM 요소 참조
const guestbookForm = document.getElementById('guestbookForm');
const messagesContainer = document.getElementById('messages');

// 방명록 메시지를 추가하는 함수
function addGuestbookMessage(name, message) {
  // 새로운 메시지 객체 생성
  const newMessage = { name, message };

  // 배열에 메시지 추가
  guestbookMessages.push(newMessage);

  // 새로운 메시지를 화면에 표시
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <p><strong>${name}</strong></p>
    <p>${message}</p>
  `;
  messagesContainer.appendChild(messageElement);
}

// 폼 제출 이벤트 핸들러
guestbookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출 이벤트 중단

  // 입력 값 가져오기
  const nameInput = guestbookForm.elements.name;
  const messageInput = guestbookForm.elements.message;

  // 입력 값 유효성 검사
  if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill in all fields.'); // 필드가 비어 있으면 알림 표시
    return;
  }

  // 방명록 메시지 추가
  addGuestbookMessage(nameInput.value, messageInput.value);

  // 입력 필드 초기화
  nameInput.value = '';
  messageInput.value = '';
});
