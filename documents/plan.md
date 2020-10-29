# App planing

Demands to app:

1. Register, log-in, log-out for users.
2. Users making posts.
3. Every post has a related page.
4. Simple REST API supporting auth.

For these needs app need a DB and auth processing. Also there's needs of
checking of user input. Routes will look like that:

- Routes API;
- GET /api/entries: get list of posts;
- GET /api/entry: get one appropriate post;
- POST /api/entry: create new post;
- Routes of UI;
- GET /post: form for new post;
- POST /post: post new post;
- GET /register: registration form;
- POST /register: create new user;
- GET /login: login form;
- POST /login: login;
- GET /logout: logout.

