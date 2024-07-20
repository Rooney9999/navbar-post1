document.addEventListener('DOMContentLoaded', (event) => {
  const listItems = document.querySelectorAll('ul li');
  const underline = document.getElementById('btn');
  let currentHoveredItem = null;

  listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const itemRect = item.getBoundingClientRect();
      const containerRect = item.parentElement.getBoundingClientRect();
      underline.style.width = `${itemRect.width}px`;
      underline.style.left = `${itemRect.left - containerRect.left}px`;
      underline.style.height = '40px'; 
      currentHoveredItem = item;
    });
  });

  document.addEventListener('click', (event) => {
    if (currentHoveredItem && !currentHoveredItem.contains(event.target)) {
      underline.style.width = '0';
      underline.style.left = '0';
      currentHoveredItem = null;
    }
  });
});
