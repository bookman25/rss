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
npm start -- -r info@email.com
```

Run tests
```
npm test
```