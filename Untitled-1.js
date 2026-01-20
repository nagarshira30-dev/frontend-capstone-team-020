document.addEventListener('DOMContentLoaded', function() {
    console.log("דף התשלום נטען בהצלחה!");

    const form = document.getElementById('payment-form');
    
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            alert("התשלום בוצע בהצלחה!");
            // המעבר חזרה לדף הבית או לסל
            window.location.href = 'p2.html'; 
        };
    }
});