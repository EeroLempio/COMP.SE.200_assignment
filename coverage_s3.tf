resource "aws_s3_bucket" "s3_bucket" {
  bucket = "comp.se.200-coverage-reports"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

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
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::${aws_s3_bucket.s3_bucket.bucket}/*"
            ]
        }
    ]
}
POLICY
}

resource "aws_iam_user" "iam_user" {
  name = "travis"
}

resource "aws_iam_access_key" "iam_access_key" {
  user = aws_iam_user.iam_user.name
}

output "aws_iam_access_key_id" {
  value = aws_iam_access_key.iam_access_key.id
}

output "aws_iam_access_key_secret" {
  value = aws_iam_access_key.iam_access_key.secret
}

resource "aws_iam_user_policy" "iam_user_policy" {
  name = "upload_coverage"
  user = aws_iam_user.iam_user.name

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "s3:PutObject",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.s3_bucket.bucket}/*"
    }
  ]
}
EOF
}