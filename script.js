document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // مثال بسيط للتحقق (في الواقع، استخدم API للتحقق من قاعدة البيانات)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});