Step 1: Run npm init -y (if it fails, here’s a fix)
Step 2: Run npm install babel-cli@6 babel-preset-react-app@3

Create a folder called src and run this terminal command:

npx babel --watch src --out-dir . --presets react-app/prod

npx create-react-app my-app
cd my-app
npm start

npm run build