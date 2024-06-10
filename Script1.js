function addToCart(productName) {
    alert(productName + ' به سبد خرید اضافه شد!');
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === ''  email === ''  message === '') {
        alert('لطفاً تمامی فیلدها را پر کنید.');
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('لطفاً یک ایمیل معتبر وارد کنید.');
        return false;
    }

    alert('پیام شما ارسال شد.');
    return true;
}