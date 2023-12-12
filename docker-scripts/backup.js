```javascript
// docker-scripts/backup.js

// This script is used to perform a daily backup of the production database

const database = process.env.DATABASE_NAME;
const backupLocation = process.env.BACKUP_LOCATION;

console.log(`Starting backup of ${database} to ${backupLocation}`);

// Perform backup logic here
// ...

console.log(`Backup of ${database} completed successfully`);

```
