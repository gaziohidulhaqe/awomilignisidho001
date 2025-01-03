document.addEventListener('DOMContentLoaded', () => {
    // Add any interactive functionality here

    // Example: Highlight list items on hover
    const listItems = document.querySelectorAll('.content ul li');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#d1ecf1'; // Light blue highlight
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '#e9ecef'; // Original background
        });
    });
});
