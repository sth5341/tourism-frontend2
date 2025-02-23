// pages/index/index.js
import axios from 'axios';  // Import axios

Page({
  data: {
    attractions: [],  // This will hold the list of attractions fetched from the backend
  },
  
  onLoad() {
    // Fetch the data from the backend when the page loads
    axios.get('https://tourism-backend-z2z4.onrender.com/api/attractions')  // Your backend URL
      .then(response => {
        if (response.data) {
          this.setData({
            attractions: response.data,  // Set the fetched data to 'attractions' in your page's data
          });
        }
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  },
});
