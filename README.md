# React Playground

## REST Server

RESTful server use HTTP commands and URIs to exchange data.

A *resource* is anything available on the server. Think books, movies, transactions, users.
A *representation* is an actual instance of that resource: The Great Gatsby, Goodfellas, $25 to Bob, jpaxton. 
An *endpoint* is sometimes used to generally refer to the location that a resource is available, like `/movies` or `/users`. Technically, it can be used for any valid resource, e.g. `/users` but also `/users/10`. 

There are many *HTTP Commands* but we would mainly be interested in GET, POST, PUT, PATCH, and DELETE.

To access a resource, we need an endpoint and an HTTP command. 
/resource (for example: /movies) + HTTP command
HTTP Commands: GET, POST, PATCH, PUT, DELETE

### Mapping REST to CRUD

CRUD = Create, Read, Update, Delete (or Destroy): the typical operations we want to perform on data, whatever the data and whatever the programming language or protocol or system. 

* Operation: Create 
  * HTTP Command: POST
  * URL: /books 
  * Body: {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'} 
  * Query: none 
  * Response status: 201
  * Response: {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}|
  * SQL Equivalent: INSERT

* Operation: Read
  * HTTP Command: GET
  * All books
    * URL: /books
    * Body: none
    * Query: none
    * Response status: 200
    * Response: [ /* list of books */ ]
    * SQL Equivalent: SELECT
  * Book by ID
    * URL: /books/1
    * Body: none
    * Query: none
    * Response status: 200
    * Response: { id: 1, /* ... rest of book */}
    * SQL Equivalent: SELECT ... WHERE
  * Books with filter
    * URL: /books
    * Body: none
    * Query: ?author=Steinbeck
    * Response status: 200
    * Response: [ /* list of books where the author matches 'Steinbeck' */ ]
    * SQL Equivalent: SELECT ... WHERE

* Operation: Update (partial)
  * HTTP Command: PATCH
  * URL: /books/1
  * Body: {title: 'New title'}
  * Query: none
  * Response status: 200
  * Response: {id: 1, author: 'Whomever', title: 'New title'}
  * SQL Equivalent: UPDATE

* Operation: Update (overwrite)
  * HTTP Command: PUT
  * URL: /books/1
  * Body: {id: 1, author: 'Whomever', title: 'New title'}
  * Query: none
  * Response status: 200
  * Response: {id: 1, author: 'Whomever', title: 'New title'}
  * SQL Equivalent: DELETE WHERE id = 1; INSERT new data...

* Operation: Update (overwrite gone wrong, because PUT only replaces, where PATCH merges)
  * HTTP Command: PUT
  * URL: /books/1
  * Body: {title: 'New title'}
  * Query: none
  * Response status: 200
  * Response: {title: 'New title'}
  * SQL Equivalent: DELETE WHERE id = 1; INSERT new data...

* Operation: Delete / Destroy
  * HTTP Command: DELETE
  * URL: /books/1
  * Body: none
  * Query: none
  * Response status: 204 (No content)
  * Response: 
  * SQL Equivalent: DELETE WHERE id = 1
