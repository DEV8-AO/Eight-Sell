   function switchProduct(type) {
            const burgerSec = document.getElementById('product-burger');
            const cookieSec = document.getElementById('product-cookie');
            const tabBurger = document.getElementById('tab-burger');
            const tabCookie = document.getElementById('tab-cookie');

            if (type === 'burger') {
                burgerSec.classList.remove('hidden');
                cookieSec.classList.add('hidden');
                tabBurger.className = 'tab-btn tab-active';
                tabCookie.className = 'tab-btn tab-inactive';
            } else {
                cookieSec.classList.remove('hidden');
                burgerSec.classList.add('hidden');
                tabCookie.className = 'tab-btn tab-active';
                tabBurger.className = 'tab-btn tab-inactive';
            }
        }