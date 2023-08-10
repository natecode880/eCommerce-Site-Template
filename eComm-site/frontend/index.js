const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// closeBtn.addEventListener('click', () => {
//     sideMenu.style.left = '-100%';
// });

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

const darkModeToggle = document.querySelector('.dark-mode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    // Toggle the 'active' class on the icons
    const icons = darkModeToggle.querySelectorAll('.material-icons-sharp');
    icons.forEach(icon => {
        icon.classList.toggle('active');
    });
});


Orders.forEach(order => {
    const tr = document.createElement('tr');
    let statusClass = '';

    if (order.status === 'Refunded') {
        statusClass = 'danger';
    } else if (order.status === 'Shipped') {
        statusClass = 'warning';
    } else if (order.status === 'Out for Delivery') {
        statusClass = 'primary';
    }

    const trContent = `
        <td>${order.cust}</td>
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td class="${statusClass}">${order.status}</td>
        <td class='primary'>Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
