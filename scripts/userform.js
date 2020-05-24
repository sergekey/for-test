const userForm = document.querySelector('.user-form');
const btn = document.querySelector('.btn');
const userPhone = document.querySelector('.user-phone');

let moveBtn = 0;

btn.onclick = function () {
    newTel();
};

function newTel() {
    const newInput = document.createElement('input');
    newInput.type = 'tel';
    newInput.placeholder = 'Телефон N';
    newInput.classList.add('user-phone-field');
    userPhone.appendChild(newInput);
    moveBtn = moveBtn + 34;
    btn.style.marginTop = moveBtn + 'px';
};

// Let's automate our form!

const sendBtn = document.querySelector('#sendForm');

let userName = document.querySelector('.user-name');
let userPhoneField = document.querySelector('.user-phone-field');
let userComment = document.querySelector('.user-comment');

class Person{
    constructor(name, phone, comment) {
        this.name = name;
        this.phone = phone;
        this.comment = comment;
    }
    send() {
        userName.value = this.name;
        userPhoneField.value = this.phone;
        userComment.value = this.comment;
        userForm.submit();
    };
};

const usr1 = new Person('Thom Yorke', '916-619-6192', 'Radiohead is the best.');

const usr2 = new Person('Bob', 'No phone', 'I like milk!');  // This is for test purposes

sendBtn.onclick = function sendForm() {
    usr1.send();
}