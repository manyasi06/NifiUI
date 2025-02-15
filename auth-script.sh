#!/bin/bash

# ============================
# Configuration Variables
# ============================
CLIENT_ID="YOUR_CLIENT_ID"
CLIENT_SECRET="YOUR_CLIENT_SECRET"
REDIRECT_URI="http://localhost"
SCOPE="https://www.googleapis.com/auth/contacts"

# ============================
# Step 1: Get Authorization Code
# ============================
AUTH_URL="https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&access_type=offline"

echo "===================================="
echo "Step 1: Visit the URL below in your browser:"
echo "$AUTH_URL"
echo "After authorization, you'll be redirected to a URL like:"
echo "http://localhost/?code=AUTHORIZATION_CODE"
echo "Copy the code from the URL and paste it below."
echo "===================================="

# Prompt user to enter the authorization code
read -p "Enter the Authorization Code: " AUTH_CODE

# ============================
# Step 2: Exchange Code for Access Token
# ============================
TOKEN_RESPONSE=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "code=${AUTH_CODE}" \
  -d "client_id=${CLIENT_ID}" \
  -d "client_secret=${CLIENT_SECRET}" \
  -d "redirect_uri=${REDIRECT_URI}" \
  -d "grant_type=authorization_code")

# Extract tokens from the response
ACCESS_TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d':' -f2 | tr -d '"')
REFRESH_TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"refresh_token":"[^"]*' | cut -d':' -f2 | tr -d '"')

# ============================
# Display Tokens
# ============================
echo "===================================="
echo "Access Token: $ACCESS_TOKEN"
echo "Refresh Token: $REFRESH_TOKEN"
echo "===================================="

# ============================
# Step 3: Test API Request (Optional)
# ============================
read -p "Do you want to make a test API call to Google People API? (y/n): " TEST_API

if [[ "$TEST_API" == "y" ]]; then
  curl -s -X GET "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses" \
    -H "Authorization: Bearer $ACCESS_TOKEN"
  echo
fi
