// pages/recommendations/recommendations.js
Page({
  data: {
    recommendations: []  // Store recommendations
  },

  onLoad: function () {
    // Fetch recommendations from the backend
    wx.request({
      url: 'https://tourism-backend-z2z4.onrender.com/recommendations',  // Recommendations endpoint
      method: 'GET',
      success: (res) => {
        if (res.data) {
          this.setData({
            recommendations: res.data  // Store recommendations
          });
        }
      },
      fail: (error) => {
        console.error("Request failed:", error);
      }
    });
  }
});
