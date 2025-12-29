function sendMessage() {
const input = document.getElementById("user-input");
const message = input.value.toLowerCase();
const chatBody = document.getElementById("chat-body");


if (!message) return;


chatBody.innerHTML += `<div><strong>You:</strong> ${message}</div>`;


let reply = "Sorry, I can only answer questions related to Vijay Kumar.";


chatbotData.forEach(item => {
item.keywords.forEach(word => {
if (message.includes(word)) {
reply = item.answer;
}
});
});


chatBody.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
chatBody.scrollTop = chatBody.scrollHeight;
input.value = "";
}