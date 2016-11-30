[![Build Status](https://travis-ci.org/bookman25/github-feed.svg?branch=master)](https://travis-ci.org/bookman25/github-feed)
[![Coverage Status](https://coveralls.io/repos/github/bookman25/github-feed/badge.svg?branch=master)](https://coveralls.io/github/bookman25/github-feed?branch=master)

# github-feed

Create file `./config.json` with array of repositories for which you want to monitor
```
{
	"smtp": {
		"host": "mail.gmail.com",
		"port": 25,
		"auth": {
			"user": "user@gmail.com",
			"pass": "password"
		}
	},
	"repositories": [
		{
			"user": "bookman25"
			"repo": "github-feed"
		}
	]
```

```
yarn start -- -r info@email.com
```

Run tests
```
yarn test
```