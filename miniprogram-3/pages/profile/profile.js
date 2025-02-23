// pages/profile/profile.js
Page({
  data: {
    userProfile: {}  // Store user profile data
  },

  onLoad: function () {
    // Fetch user profile
    wx.request({
      url: 'https://tourism-backend-z2z4.onrender.com/profile',  // Assuming the backend has a profile endpoint
      method: 'GET',
      success: (res) => {
        if (res.data) {
          this.setData({
            userProfile: res.data  // Set the profile data
          });
        }
      },
      fail: (error) => {
        console.error("Request failed:", error);
      }
    });
  }
});
