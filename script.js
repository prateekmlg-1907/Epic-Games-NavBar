// document.addEventListener('DOMContentLoaded', function () {
//     const dropdownMenu = document.querySelector('.dropdown-menu');
//     const navbarBrand = document.querySelector('.navbar-brand');

//     // Show the dropdown on mouse enter
//     navbarBrand.addEventListener('mouseenter', function () {
//         dropdownMenu.style.display = 'block';
//         dropdownMenu.style.opacity = '1';
//     });

//     // Hide the dropdown on mouse leave
//     navbarBrand.addEventListener('mouseleave', function () {
//         dropdownMenu.style.display = 'none';
//         dropdownMenu.style.opacity = '0';
//     });

//     // Keep the dropdown open when hovering over it
//     dropdownMenu.addEventListener('mouseenter', function () {
//         dropdownMenu.style.display = 'block';
//         dropdownMenu.style.opacity = '1';
//     });

//     dropdownMenu.addEventListener('mouseleave', function () {
//         dropdownMenu.style.display = 'none';
//         dropdownMenu.style.opacity = '0';
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navbarBrand = document.querySelector('.navbar-brand');
    let isMobile = window.innerWidth <= 768;

    function showDropdown() {
        dropdownMenu.style.display = 'block';
        dropdownMenu.style.opacity = '1';
    }

    function hideDropdown() {
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.opacity = '0';
    }

    // PC: Show the dropdown on mouse enter, hide on mouse leave
    if (!isMobile) {
        navbarBrand.addEventListener('mouseenter', showDropdown);
        navbarBrand.addEventListener('mouseleave', hideDropdown);
        dropdownMenu.addEventListener('mouseenter', showDropdown);
        dropdownMenu.addEventListener('mouseleave', hideDropdown);
    }

    // Mobile: Toggle dropdown on click/tap
    navbarBrand.addEventListener('click', function (e) {
        e.preventDefault();
        if (dropdownMenu.style.display === 'block') {
            hideDropdown();
        } else {
            showDropdown();
        }
    });

    // Handle window resizing (PC to mobile or mobile to PC)
    window.addEventListener('resize', function () {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            hideDropdown();
        }
    });
});
