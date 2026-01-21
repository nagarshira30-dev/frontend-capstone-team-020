// פונקציה לעדכון המחירים
function updateCart() {
    let total = 0;
    const shippingPrice = 20;
    
    // וודאי שה-Class כאן תואם למה שכתבת ב-HTML (בחרתי .cart-item)
    const items = document.querySelectorAll('.cart-item');

    items.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        if (!isNaN(price)) {
            total += price;
        }
    });

    // חישוב המשלוח - אם יש פריטים יש משלוח, אם אין פריטים המשלוח הוא 0
    const currentShipping = items.length > 0 ? shippingPrice : 0;
    const finalTotal = total + currentShipping;

    // שמירת המחיר הסופי למעבר לעמוד התשלום
    localStorage.setItem('cartTotal', finalTotal); 

    // עדכון התצוגה ב-HTML
    const shippingElement = document.getElementById('shipping-cost');
    const totalElement = document.getElementById('total-sum');
    const cartContainer = document.getElementById('cart-items');

    if (shippingElement) shippingElement.innerText = currentShipping + "$";
    if (totalElement) totalElement.innerText = finalTotal + "$";

    // אם הסל ריק, הצגת הודעה
    if (items.length === 0 && cartContainer) {
        cartContainer.innerHTML = "<p style='text-align:center; padding: 20px;'>הסל ריק</p>";
    }
}

// פונקציה למחיקת פריט
function removeItem(button) {
    const itemRow = button.closest('.cart-item');
    if (itemRow) {
        itemRow.remove();
        updateCart(); // קריאה לפונקציה לעדכון המחיר אחרי המחיקה
    }
}