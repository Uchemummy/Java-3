 // Sample menu data
 const menuItems = {
  Rice: [
  { image: '/images/image1.jpeg', description: 'Delicious fried rice.' },
  { image: '/images/image2.jpeg', description: 'Rice with Fruits.' }, 
  { image: '/images/image3.jpeg', description: 'garnished Coconut rice .' },
  { image:'/images/image4.jpeg', description: 'Delicious Jellof rice.'},
  { image:'/images/image5.jpeg',  description: 'Fried rice &chicken.'},
  { image:'/images/image6.jpeg', description: 'Jellof rice.'},
  { image:'/images/image7.jpeg',  description: 'Vegetable Rice & chicken.'},
  { image: '/images/image8.jpeg', description: 'Rice and Stew/Assorted Meat.'},
  { image: '/images/image9.jpeg', description: 'Rice & Stew/chicken.'}
  ],

  Swallow : [
  { image:'/images/soup1.jpeg', description: 'Okro with Assorted Meat.' }, 
  { image:'/images/soup2.jpeg', description: 'Egwusi.' },
  { image:'/images/soup3.jpeg', description: 'Vegetable.' },
  { image:'/images/soup4.jpeg', description: 'Vegetable with Assorted.' },
  { image: '/images/soup5.jpeg', description: 'Egwusi with Assorted.' },
  { image:'/images/soup6.jpeg', description: 'Okro & Chicken.' },
  { image:'/images/soup7.jpeg', description: 'Ewedu & Assorted.' },
  { image: '/images/soup8.jpeg', description: 'Editan.' },
  { image:'/images/soup9.jpeg', description: 'Dry Egwusi.' }
],

  salad: [
  { image:'/images/salad1.jpeg', description: 'Vegetable Salad.' }, 
  { image:'/images/salad2.jpeg', description: 'Jellof Salad' },
  { image:'/images/salad3.jpeg', description: 'Vegetable Egg Salad.' },
  { image:'/images/salad4.jpeg', description: 'Fruit Salad' },
  { image:'/images/salad5.jpeg', description: 'Vegetable Egg Salad.' },
  { image:'/images/salad6.jpeg', description: 'African Salad' }, 
  ],

  Beans: [
  { image:'/images/beans1.jpeg', description: 'Vegetable Beans' }, 
  { image:'/images/beans2.jpeg', description: 'Oil Beans & Plantain #5,000' },  
  { image:'/images/beans3.jpeg',description: 'Jellof Beans & Plantain' },
  { image:'/images/beans4.jpeg',description: 'Pepper Beans & plantain' },
  { image:'/images/beans5.jpeg', description: 'Vegetable Beans & Plantain' },
  { image:'/images/beans6.jpeg', description: 'Vegetable, white Rice & Beans' }
 ]
};

// Function to display images based on selected category
function displayImages(category) {
  const menuImagesContainer = document.getElementById('menu-images');
  menuImagesContainer.innerHTML = ''; // Clear existing images

  // Iterate through images in the selected category and create image elements
  menuItems[category].forEach(item => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = category;

    const description = document.createElement('p');
    description.textContent = item.description;

    const priceTag = document.createElement('p');
    priceTag.textContent = getPrice(item.description);

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Place Order';
    orderButton.classList.add('order-button');

    orderButton.addEventListener('click', function() {
      const price = prompt("Enter the price:");
      if (validatePrice(item.description, price)) {
        alert("Payment Confirmed Thank You");
      } else {
        alert("Invalid price. Please try again.");
      }
    });

    imgContainer.appendChild(img);
    imgContainer.appendChild(description);
    imgContainer.appendChild(priceTag);
    imgContainer.appendChild(orderButton);
    menuImagesContainer.appendChild(imgContainer);
  });
}

// Function to get price from description
function getPrice(description) {
  const priceRegex = /#\d+,\d+/;
  const match = description.match(priceRegex);
  return match ? match[0] : 'Price not available';
}

// Function to validate price
function validatePrice(description, price) {
  const extractedPrice = getPrice(description).replace("#", "").replace(",", "");
  return parseFloat(price) === parseFloat(extractedPrice);
}

// Button click event handlers
function showRice() {
  displayImages('Rice');
}

function showSwallow() {
  displayImages('Swallow');
}

function showSalad() {
  displayImages('salad');
}

function showBeans() {
  displayImages('Beans');
}
