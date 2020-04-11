export const config = {
  "dev": {
    "username": process.env.username,
    "password": process.env.username,
    "database": process.env.username,
    "host":  process.env.host,
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": process.env.bucket
  },
  "prod": {
    "username": process.env.username,
    "password": process.env.username,
    "database": process.env.username,
    "host": process.env.host,
    "dialect": "postgres"
  },
  "jwt":{
    "secret":process.env.secretJWT
  }
}

