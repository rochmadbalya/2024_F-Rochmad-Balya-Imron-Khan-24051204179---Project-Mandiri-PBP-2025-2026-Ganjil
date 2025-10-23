document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;
            const errorDiv = document.getElementById('form-error');

            if (nama.trim() === '' || email.trim() === '' || pesan.trim() === '') {
                errorDiv.textContent = 'Semua field wajib diisi!';
            } else {
                errorDiv.textContent = ''; 
                alert('Pesan Anda sudah terkirim!');
                
                contactForm.reset();
            }
        });
    }


    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('form-error');

            if (username.trim() === '' || password.trim() === '') {
                errorDiv.textContent = 'Semua field wajib diisi!';
            } else {
                errorDiv.textContent = ''; 
                alert('Login Berhasil!');
                
                loginForm.reset();
            }
        });
    }


    const signForm = document.getElementById('sign-form');
    
    if (signForm) {
        
        signForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('form-error');

            if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
                errorDiv.textContent = 'Semua field wajib diisi!';
            } else {
                errorDiv.textContent = ''; 
                alert('Pendaftaran Berhasil!');
                
                signForm.reset();
            }
        });
    }

    const btnBeli = document.getElementById('btn-beli');

    if (btnBeli) {
        btnBeli.addEventListener('click', function() {
            alert('Produk sudah ditambahkan ke keranjang!');
        });
    }


});