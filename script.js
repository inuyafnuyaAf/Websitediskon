function calculateDiscount() {
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
        alert('Harap masukkan nilai yang valid untuk harga dan diskon!');
        return;
    }

    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;

    document.getElementById('resultPrice').innerText = `Rp ${price.toFixed(2)}`;
    document.getElementById('resultDiscount').innerText = `${discount}%`;
    document.getElementById('resultDiscountAmount').innerText = `Rp ${discountAmount.toFixed(2)}`;
    document.getElementById('resultFinalPrice').innerText = `Rp ${finalPrice.toFixed(2)}`;

    document.getElementById('result').style.display = 'block';
}

function printPage() {
    window.print();
}
