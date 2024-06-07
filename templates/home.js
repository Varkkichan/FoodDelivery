document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('scroll-container').scrollBy({
        left: 300, // Adjust this value as needed for the scroll amount
        behavior: 'smooth'
    });
});

document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('scroll-container').scrollBy({
        left: -300, // Adjust this value as needed for the scroll amount
        behavior: 'smooth'
    });
});



function scrollLeft() {
    const hotelList = document.getElementById('hotelList');
    hotelList.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    const hotelList = document.getElementById('hotelList');
    hotelList.scrollBy({ left: 200, behavior: 'smooth' });
}

