// pages/index/index.js
Page({
  data: {
    recommendations: []  // Store the fetched recommendations here
  },

  onLoad: function () {
    // Make a request to the backend API
    wx.request({
      url: 'https://tourism-backend-z2z4.onrender.com/recommendations', // Backend URL
      method: 'GET',
      success: (res) => {
        if (res.data) {
          this.setData({
            recommendations: res.data  // Set the recommendations data in the page's state
          });
        }
      },
      fail: (error) => {
        console.error("Request failed:", error);  // Log error if the request fails
      }
    });
  }
});
