```javascript
// docker-scripts/upload.js

// This script uploads a file to a specified cloud provider

const cloudProviders = {
  AWS: {
    upload: (file) => {
      // Code to upload file to AWS
      console.log(`Uploading file ${file} to AWS...`);
      // Upload logic here
      console.log(`File ${file} uploaded successfully to AWS.`);
    },
  },
  GCP: {
    upload: (file) => {
      // Code to upload file to GCP
      console.log(`Uploading file ${file} to GCP...`);
      // Upload logic here
      console.log(`File ${file} uploaded successfully to GCP.`);
    },
  },
  Azure: {
    upload: (file) => {
      // Code to upload file to Azure
      console.log(`Uploading file ${file} to Azure...`);
      // Upload logic here
      console.log(`File ${file} uploaded successfully to Azure.`);
    },
  },
};

// Function to upload file to a specified cloud provider
const uploadFile = (file, cloudProvider) => {
  if (cloudProviders[cloudProvider]) {
    cloudProviders[cloudProvider].upload(file);
  } else {
    console.log(`Invalid cloud provider: ${cloudProvider}`);
  }
};

// Example usage
const file = 'example.txt';
const cloudProvider = 'AWS';
uploadFile(file, cloudProvider);

module.exports = {
  uploadFile,
};
```
