const adminBtn = document.getElementById('admin')


adminBtn.addEventListener('click', (e) => {
    console.log(localStorage.isAdmin)
    if (localStorage.isAdmin == 'true') {
        adminBtn.textContent = 'ADMIN LOGIN'
        localStorage.setItem('isAdmin', false)
    } else {
        adminBtn.textContent = 'ADMIN LOGOUT'
        localStorage.setItem('isAdmin', true)
    }
});

if (localStorage.isAdmin == 'true') {
    adminBtn.textContent = 'ADMIN LOGOUT'
}