function ApiResponse(success, message, error, data) {
    this.success = success;
    this.message = message;
    this.error = error;
    this.data = data;
  }
  
  module.exports = ApiResponse;