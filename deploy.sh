rm -rf ./dist
npm run build
scp -r ./dist/apps/* root@pong.app.vision:/apps/