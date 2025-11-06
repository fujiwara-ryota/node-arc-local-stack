#!/bin/bash

set -e

echo "Starting LocalStack initialization..."

echo "Waiting for LocalStack to be ready..."
until awslocal s3 ls 2>/dev/null; do
  echo "Waiting for LocalStack S3 service..."
  sleep 2
done

S3_BUCKET_NAME=${S3_BUCKET_NAME:-my-app-bucket}
SQS_QUEUE_NAME=${SQS_QUEUE_NAME:-my-app-queue}
AWS_REGION=${AWS_REGION:-us-east-1}

echo "Creating S3 bucket: ${S3_BUCKET_NAME}"
awslocal s3 mb s3://${S3_BUCKET_NAME} --region ${AWS_REGION} || echo "Bucket ${S3_BUCKET_NAME} already exists"

echo "Creating SQS queue: ${SQS_QUEUE_NAME}"
awslocal sqs create-queue --queue-name ${SQS_QUEUE_NAME} --region ${AWS_REGION} || echo "Queue ${SQS_QUEUE_NAME} already exists"

echo "Listing S3 buckets:"
awslocal s3 ls

echo "Listing SQS queues:"
awslocal sqs list-queues --region ${AWS_REGION}

echo "LocalStack initialization completed successfully!"
