document.addEventListener('DOMContentLoaded', function() {
    // Get all product cards
    const productCards = document.querySelectorAll('.list-products > .card-body');
    const totalElement = document.querySelector('.total');
    
    // Function to calculate and update total price
    function updateTotal() {
        let total = 0;
        
        productCards.forEach(card => {
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
        });
        
        totalElement.textContent = total + ' $';
    }
    
    // Add event listeners to each product card
    productCards.forEach(card => {
        const plusBtn = card.querySelector('.fa-plus-circle');
        const minusBtn = card.querySelector('.fa-minus-circle');
        const deleteBtn = card.querySelector('.fa-trash-alt');
        const heartBtn = card.querySelector('.fa-heart');
        const quantitySpan = card.querySelector('.quantity');
        
        // Plus button - increment quantity
        plusBtn.addEventListener('click', function() {
        let currentQuantity = parseInt(quantitySpan.textContent);
        currentQuantity++;
        quantitySpan.textContent = currentQuantity;
        updateTotal();
        });
        
        // Minus button - decrement quantity (minimum 0)
        minusBtn.addEventListener('click', function() {
        let currentQuantity = parseInt(quantitySpan.textContent);
        if (currentQuantity > 0) {
            currentQuantity--;
            quantitySpan.textContent = currentQuantity;
            updateTotal();
        }
        });
        
        // Delete button - remove product card
        deleteBtn.addEventListener('click', function() {
        // Reset quantity to 0
        quantitySpan.textContent = '0';
        updateTotal();
        
        // Optional: hide the card with animation
        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
        });
        
        let isLiked = false;
        heartBtn.addEventListener('click', function() {
            if (isLiked) {
                heartBtn.style.color = '#999';
                isLiked = false;
            } else {
                heartBtn.style.color = '#dc3545';
                isLiked = true;
            }
            });
        });
    updateTotal();
});