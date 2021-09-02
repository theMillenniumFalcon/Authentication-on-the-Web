# How Sessions work in Web Servers:

- Session based authentication is one in which the user state is stored on the server’s memory.
- When using a session based auth system, the server creates and stores the session data in the server memory when the user logs in and then stores
  the session Id in a cookie on the user browser.
- The session Id is then sent on subsequent requests to the server and the server compares it with the stored session data and proceeds to process the
  requested action.
- https://res.cloudinary.com/practicaldev/image/fetch/s--jzM6Wq6e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/800/0%2AP5OxJMihg0S0jyqk.png

# Authentication:

- authentication: verifying identity ( 401 Unauthorized )
- authorization: verifyoing permisiions ( 403 forbidden )

## Username / password scheme

- stateful ( i.e. session using a cookie )
- stateless ( i.e. token using JWT / OAuth / other )

# Sessions based auth:

## Flow -->

- user submit login credentials, e.g. email & password
- server verifies the credentials against the database
- server creates a temporary user SESSION
- server isssues a cookie with a SESSION ID
- user sends the cookie with each request
- server validates it against the session store & grants access
- when user logs out, server destroys the session and clears the cookie on the client side

## Features -->

### every user session is stored server-side (stateful)

- memory (e.g. file system)
- cache (e.g. Redis or Mecached), or
- database (e.g. PostgreSQL, MongoDB)

### each user is identified by a session ID

#### opaque ref.

- no 3rd party can extract data out
- only user (server) can map back to data

#### the session Id will be stored in a cookie

- signed with a secret
- protected with flags

#### SSR web apps, frameworks (Spring, Rails), scripting langs ( PHP )

<hr>

# Cookies:

- Cookie header, just like Authorization or Content-Type
- used in session management, personalization, tracking
- consists of name, value, and ( optional ) atteibutes / flags
- set with Set-Cookie by server, appended with Cookie by browser

# Security:

- signed ( HMAC ) with a secret to mitigate tampering
- rarely encrypted ( AES ) to protected from being read
  - no security concern if read by 3rd party
  - carries no meaningful data ( random string )
  - even if encrypted, still a 1-1 match
- encoded ( URL ) --> not for security, but compact

# Attributes:

- Domain and Path ( can only be used on a given site & route )
- Expiration ( can only be used until expiry )
  - when omitted, becomes a session cookie
  - gets deleted when browser is closed

# Flags:

- HttpOnly ( cannot be read with JS on the client side )
- Secure ( can only sent over encrypted cookies HTTPS channel ), and
- SameSite ( can only be sent fro the same domain, i.e. no CORS sharing )

# CSRF:

- unauthorized action on behalf of the authenticated user
- mitigated with a CSRF taken ( e.g. sent in a separate X-CSRF_TOKEN cookie)

<hr>

# Tokens:

## Flow -->

- user submits login credentials, e.g. email & password
- server verifies the credentials against the DB
- server generates a temporary token and embeds user data into it
- server responds back with the token (in body or header)
- user stores the token in client storage
- user sends the token in client storage
- user sends the token along in client storage
- user sends the token along with each requested
- server verifies the token & grants access
- when user logs out, token is cleared froom client storage

## Features -->

- tokens are not stored server-side, only on the client side (stateless)
- signed with a secret against tampering
  - verified and can be trusted by the server
- tokens can be opaque or self-contained
  - carries all required user data in its payload
  - reduces database lookups, but exposes data to XSS
- typically sent in Authorization header
- when a token is about to expire, it can be refreshed
  - client is isssued both access & refresh tokens
- used in SPA web apps, web APIs, mobile apps
