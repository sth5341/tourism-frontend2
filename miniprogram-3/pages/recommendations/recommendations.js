// pages/recommendations/recommendations.js
import axios from 'axios';  // Importing axios for making HTTP requests

Page({
  data: {
    recommendations: [],  // Will hold the fetched list of recommendations
  },
  
  onLoad() {
    // Fetch recommendations data when the page is loaded
    axios.get('https://tourism-backend-z2z4.onrender.com/api/recommendations')  // Your backend URL
      .then(response => {
        if (response.data) {
          this.setData({
            recommendations: response.data,  // Set the fetched data to 'recommendations' in page's data
          });
        }
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  },
});
