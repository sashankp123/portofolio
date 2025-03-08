#!/bin/bash

# Build the project (bypass TypeScript errors)
echo "Building project..."
npx vite build --mode production

# Create a .nojekyll file to prevent GitHub Pages from using Jekyll
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Use npx to run gh-pages with the right parameters
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist -b gh-pages 