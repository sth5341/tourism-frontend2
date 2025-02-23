// pages/logs/logs.js
import axios from 'axios';  // Importing axios for making HTTP requests

Page({
  data: {
    logs: [],  // Will hold the fetched logs
  },
  
  onLoad() {
    // Fetch logs data when the page is loaded
    axios.get('https://tourism-backend-z2z4.onrender.com/api/logs')  // Your backend URL
      .then(response => {
        if (response.data) {
          this.setData({
            logs: response.data,  // Set the fetched data to 'logs' in page's data
          });
        }
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  },
});
