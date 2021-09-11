## What is JWT

- jwt is used for authorization, not authentication.
- authentication --> taking username and password and authenticating if they are correct ( like logging a user in )
- authorization --> is making sure that the user that's sending the request to your user is the same user that is logged in during the authentication process. It is authorizing that this user has access to this particular system.

## How sessions and cookies work ?

- User uses client to login.
- Client sends a post request ( POST/user/login ) { email, password }
- Server will then perform a authentication to make sure that the user is correct
- If the user happens to be correct, it will be stored in a session in server memory
- A unique ID will be generated corresponds to the user in the memory
- Server will send the session ID back to the browser using a cookie ( so that the browser always has that session ID that it will send back to the server everytime it makes a request )
- During a request, the client will send the request with session ID cookie.
- Server will get information from session based on ID and verify them.
- After verification, server will send the response to the client.

## How jwt work ?

- User uses client to login.
- Client sends a post request ( POST/user/login ) { email, password }
- Server will then perform a authentication to make sure that the user is correct
- Server will create a json web token and encodes and serializes that and signs it with it's own secret key ( so that server can u if you try to mess with it )
- Server sends the JWT back to the browser.
- Here nothing is stored on the server.
- Browser can store the jwt in many ways like cookies
- During a request, clinet will send the request with JWT to know user needs to be authenticated.
- Server will now verify the JWT has not been channged since the time time it was signed.
- Server will now de-serialize the JWT.
- Now if the user is authorized to use that resource, the server will send the response back.

## The main difference between session and JWT

- In session version, the information about the user is stored on the server. So the server has to perform a look-up to find the user based on the session ID.
- In case of json web token, what happens is the user information is stored in the actual token, which means it is stored on the client side and the server does not have to remember anything.
- Which is great, as now we can use the same jwt across multiple servers.
