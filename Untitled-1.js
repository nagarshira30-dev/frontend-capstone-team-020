window.onload = function() {
    console.log("הדף נטען!");

    const form = document.getElementById('payment-form');
    
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            console.log("הכפתור נלחץ!");
            alert("התשלום בוצע בהצלחה!");
            window.location.href = 'index.html'; 
        };
    } else {
        console.log("לא מצאתי את הטופס, בדקי את ה-ID");
    }
};