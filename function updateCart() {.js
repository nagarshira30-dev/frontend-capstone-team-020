// פונקציה לעדכון המחירים
function updateCart() {
    let total = 0;
    const shippingPrice = 20;
    const items = document.querySelectorAll('.cart-item');

    items.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        total += price;
    });

    const currentShipping = items.length > 0 ? shippingPrice : 0;

    document.getElementById('shipping-cost').innerText = currentShipping;
    document.getElementById('total-sum').innerText = total + currentShipping;

    if (items.length === 0) {
        document.getElementById('cart-items').innerHTML = "<p style='text-align:center;'>הסל ריק</p>";
    }
}

// פונקציה למחיקת פריט
function removeItem(button) {
    const itemRow = button.closest('.cart-item');
    if (itemRow) {
        itemRow.remove();
        updateCart(); // קורא לעדכון מחיר מיד אחרי המחיקה
    }
}