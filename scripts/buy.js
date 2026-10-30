 const products = {
            burger: {
                title: 'Eight Food — Hambúrguer',
                subtitle: 'Blend 100% bovino artesanal',
                price: 4500,
                img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80'
            },
            cookie: {
                title: 'Adbolachas — Bolachas Gourmet',
                subtitle: 'Caixa 6 un. pepitas de chocolate',
                price: 2200,
                img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80'
            }
        };

        let currentProduct = 'burger';
        let qty = 1;
        const shippingFee = 1000;
        const discountFee = 500;

        function setCartProduct(type) {
            currentProduct = type;
            const tabBurger = document.getElementById('tab-cart-burger');
            const tabCookie = document.getElementById('tab-cart-cookie');

            if (type === 'burger') {
                tabBurger.className = 'tab-btn tab-active';
                tabCookie.className = 'tab-btn tab-inactive';
            } else {
                tabCookie.className = 'tab-btn tab-active';
                tabBurger.className = 'tab-btn tab-inactive';
            }

            const item = products[currentProduct];
            document.getElementById('cart-item-img').src = item.img;
            document.getElementById('cart-item-title').textContent = item.title;
            document.getElementById('cart-item-subtitle').textContent = item.subtitle;
            document.getElementById('cart-item-price-unit').textContent = item.price.toLocaleString('pt-PT') + ' Kz un.';

            calculateTotals();
        }

        function updateQty(delta) {
            if (qty + delta >= 1) {
                qty += delta;
                document.getElementById('cart-qty').textContent = qty;
                calculateTotals();
            }
        }

        function calculateTotals() {
            const itemPrice = products[currentProduct].price;
            const subtotal = itemPrice * qty;
            const total = subtotal + shippingFee - discountFee;

            document.getElementById('summary-subtotal').textContent = subtotal.toLocaleString('pt-PT') + ' Kz';
            document.getElementById('summary-total').textContent = total.toLocaleString('pt-PT') + ' Kz';
        }

        function selectPayment(method) {
            ['express', 'multicaixa', 'cash'].forEach(m => {
                const card = document.getElementById('payment-' + m);
                const radio = document.getElementById('radio-' + m);
                if (m === method) {
                    card.classList.add('active');
                    radio.className = 'radio-circle radio-selected';
                    radio.innerHTML = '<div class="radio-dot"></div>';
                } else {
                    card.classList.remove('active');
                    radio.className = 'radio-circle radio-unselected';
                    radio.innerHTML = '';
                }
            });
        }

        function handleCheckoutSubmit(event) {
            event.preventDefault();
            document.getElementById('success-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('success-modal').classList.add('hidden');
        }