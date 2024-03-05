function updatePercentage(input) {
    const value = input.value;
    const span = input.parentElement.querySelector('.order-item__percentage');
    span.textContent = value + '%';
}