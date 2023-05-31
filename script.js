// Example JavaScript enhancement
const heroLinks = document.querySelectorAll('ul li a');

heroLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const heroName = link.textContent;
        console.log(`You clicked on ${heroName}`);
        // You can add further logic or redirect to the corresponding hero page
    });
});
