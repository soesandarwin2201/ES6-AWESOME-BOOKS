const messageContainer = document.getElementById('message-container');

const alertMessage = (type, message, time) => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('alert');
  paragraph.innerHTML = `${message}`;
  if (type === 'error') {
    paragraph.classList.add('error');
  } else if (type === 'success') {
    paragraph.classList.add('success');
  } else if (type === 'remove') {
    paragraph.classList.add('remove');
  }
  messageContainer.appendChild(paragraph);
  paragraph.classList.add('fadeout');
  setTimeout(() => {
    messageContainer.removeChild(paragraph);
  }, time);
}

export { messageContainer, alertMessage };
