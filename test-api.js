const fetch = require('node-fetch');

async function testAPI() {
  try {
    const response = await fetch('http://localhost:5000/api/products');
    if (response.ok) {
      const data = await response.json();
      console.log('Successfully connected to the API');
      console.log('Products:', data);
    } else {
      console.log('Failed to fetch products. Status:', response.status);
    }
  } catch (error) {
    console.error('Error connecting to the API:', error.message);
  }
}

testAPI();