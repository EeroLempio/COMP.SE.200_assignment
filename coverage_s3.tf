provider "aws" {
    access_key = "YOUR ACCESS KEY HERE"
    secret_key = "YOUR SECRET KEY HERE"
    region = "eu-west-1"
}

/*
Resource for the actual bucket to be created.
Public read permissions and static website hosting configured.
*/
resource "aws_s3_bucket" "s3_bucket" {
  bucket = "comp.se.200-coverage-reports"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

/*
Policy for the bucket, all user groups under the account
have the rights to the listed actions for the bucket.
*/
resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.s3_bucket.id

  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:GetObjectAcl",
                "s3:PutObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::${aws_s3_bucket.s3_bucket.bucket}/*"
            ]
        }
    ]
}
POLICY
}

/*
IAM user for travis
*/
resource "aws_iam_user" "iam_user" {
  name = "travis"
}

/*
Access key for the created IAM user
*/
resource "aws_iam_access_key" "iam_access_key" {
  user = aws_iam_user.iam_user.name
}

/*
Output the access key id
*/
output "aws_iam_access_key_id" {
  value = aws_iam_access_key.iam_access_key.id
}

/*
Output the access key secret
*/
output "aws_iam_access_key_secret" {
  value = aws_iam_access_key.iam_access_key.secret
}

/*
Attach policy to the created user with listed rights to the
created bucket, listing of these is optional as the user
already has these rights through the bucket policy
*/
resource "aws_iam_user_policy" "iam_user_policy" {
  name = "upload_coverage"
  user = aws_iam_user.iam_user.name

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
          "s3:AbortMultipartUpload",
          "s3:DeleteObject",
          "s3:GetObject",
          "s3:GetObjectAcl",
          "s3:PutObject",
          "s3:PutObjectAcl"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.s3_bucket.bucket}/*"
    }
  ]
}
EOF
}
