// References to elements in the DOM
const unitOptions = document.querySelectorAll('input[name="unit"]');
const totalElement = document.querySelector('.total');

// Prices for each unit option
const prices = {
    "unit-1": "$10.00 USD",
    "unit-2": "$18.00 USD",
    "unit-3": "$24.00 USD"
};

// Function to update the total price
function updateTotalPrice() {
    const selectedOption = document.querySelector('input[name="unit"]:checked');
    if (selectedOption) {
        const totalPrice = prices[selectedOption.id];
        totalElement.textContent = `Total: ${totalPrice}`;
    }
}

// Add event listeners to all unit options
unitOptions.forEach(option => {
    option.addEventListener('change', updateTotalPrice);
});

// Initialize the total price on page load
updateTotalPrice();
