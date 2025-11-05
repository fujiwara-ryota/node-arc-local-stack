console.log('Worker service starting...');
console.log('Node version:', process.version);
console.log('Environment:', process.env.NODE_ENV);
console.log('AWS Endpoint:', process.env.AWS_ENDPOINT);
console.log('S3 Bucket:', process.env.S3_BUCKET_NAME);
console.log('SQS Queue:', process.env.SQS_QUEUE_NAME);

console.log('Worker service is ready. Waiting for application code...');

setInterval(() => {
  console.log('Worker service heartbeat...');
}, 30000);
