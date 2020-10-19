# tbana-webclient
[![Build Status](https://travis-ci.org/oversizedhat/tbana-webclient.svg?branch=master)](https://travis-ci.org/oversizedhat/tbana-webclient)

Single page web app with display of Stockholm subway stations for anyone typically commuting between two stops.

Made fun as an excuse to test out Vue.

Birthed from vue cli create.

```
npm install
# install

npm run serve
# corresponds to vue-cli-service serve. starts development server.

npm run build
# production build, corresponds to vue-cli-service build

npm run lint
# eslint, corresponds to vue-cli-service lint

npm test
# run jest tests once

npm run test:watch
# run jest tests and keep watching for changes

npm run deploy
# deploys to s3 bucket (not used, deployment is done by travis on merge to master)

npm run siteids
# runs the utility script to fetch siteids given station names
```

