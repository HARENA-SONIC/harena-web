#!/bin/bash
aws configure set aws_access_key_id "$1"
aws configure set aws_secret_access_key "$2"
aws configure set default.region "$3"
aws codeartifact login --tool npm --repository harena-store --domain npm-hei-school --domain-owner 088312068315
