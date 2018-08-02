# hacktivpress

List of article endpoints:

| Route                            | HTTP   | Description                                            |
|----------------------------------|--------|--------------------------------------------------------|
| /articles                        | GET    | Get all the articles                                   |
| /articles/:id                    | GET    | Get a single article                                   |
| /articles?user=user_id           | GET    | Get articles based on user id                          |
| /articles?category=category_name | GET    | Get articles based on category                         |
| /articles                        | POST   | Create an article                                      |
| /articles/:id                    | DELETE | Delete an article                                      |
| /articles/:id                    | PUT    | Update an article with new info                        |

List of user and auth endpoints:

| Route          | HTTP   | Description                                            |
|----------------|--------|--------------------------------------------------------|
| /signup        | POST   | Sign up with new user info                             |
| /login         | POST   | Log in while get an access token based on credentials  |
| /users/:id     | GET    | Get user info                                          |

## Usage
On server folder, with npm:
```javascript
npm install
npm run dev
```

On client folder, with npm:
```javascript
npm install
npm run serve
```

Access the website via `http://localhost:8080` and API via `http://localhost:3000/`