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


function addGuestbookMessage(name, message) {
  // ...

  // 새로운 메시지를 화면에 표시
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <p><strong>${name}</strong></p>
    <p>${message}</p>
    <div class="buttons">
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
    </div>
  `;
  messagesContainer.insertBefore(messageElement, messagesContainer.firstChild);

  // ...
}
