export interface AppConfig {
  nodeEnv: string;
  awsEndpoint: string;
  awsRegion: string;
  s3BucketName: string;
  sqsQueueName: string;
}

export function loadConfig(): AppConfig {
  return {
    nodeEnv: process.env.NODE_ENV || "development",
    awsEndpoint: process.env.AWS_ENDPOINT || "http://localhost:4566",
    awsRegion: process.env.AWS_REGION || "us-east-1",
    s3BucketName: process.env.S3_BUCKET_NAME || "default-bucket",
    sqsQueueName: process.env.SQS_QUEUE_NAME || "default-queue",
  };
}
