# React technical test application

This app is used as a technical test for developers applying to a React UI developer position.

## Challenges

### Issues to fix

- Confirmation message (toastify) not being displayed in User creation
- Users list is not being uodated after user deletion

### New Functionalities to add

- Implement Select dropdowns in User's Gender and Status fields.
- Implement paginator functionality at users page bottom
- Implement User's posts list page with basic CRUD operations, paginator and search field functionality (React Hooks)
- Implement Blog page with comments by blog article functionality (React Hooks)

## Mock API used

For this test, you need to use and implement services from [Go Rest](https://gorest.co.in)

## Resources to use:

- https://gorest.co.in/public-api/users
- https://gorest.co.in/public-api/posts
- https://gorest.co.in/public-api/comments

## Nested Resources

- GET, POST, PUT /public-api/users/USER_ID/posts
- GET, POST, PUT /public-api/posts/USER_ID/comments
