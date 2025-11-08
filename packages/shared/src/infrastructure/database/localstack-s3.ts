import { S3Client } from "@aws-sdk/client-s3";

export function createS3Client(): S3Client {
  const endpoint = process.env.AWS_ENDPOINT || "http://localhost:4566";
  const region = process.env.AWS_REGION || "us-east-1";

  return new S3Client({
    endpoint,
    region,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "test",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "test",
    },
    forcePathStyle: true,
  });
}
