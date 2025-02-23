// pages/logs/logs.js
Page({
  data: {
    logs: []  // Store logs here
  },

  onLoad: function () {
    // Fetch logs if needed
    wx.request({
      url: 'https://tourism-backend-z2z4.onrender.com/logs',  // Assuming your backend has a logs endpoint
      method: 'GET',
      success: (res) => {
        if (res.data) {
          this.setData({
            logs: res.data  // Set the logs data here
          });
        }
      },
      fail: (error) => {
        console.error("Request failed:", error);
      }
    });
  }
});
