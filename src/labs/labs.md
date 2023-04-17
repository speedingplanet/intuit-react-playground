# React Labs

## Lab 1: Component props

Build a component that will display the first and last names of a student given to it. 

Lab01.tsx has student data. Create a component called `StudentDetail` in Lab01.tsx that has the following traits:

- Passed a prop called "firstName"
- Passed a prop called "lastName"
- Renders a paragraph as "The student is firstName lastName"

Load the component you build in Lab01, passing the values for `firstName` and `lastName` defined in Lab01

In your browser, visit /labs/lab-01 and see what the results look like.

## Lab 2: Testing props

Build a test for Lab02.tsx:

- Lab02.tsx is just the solution for Lab01.tsx
- Name the test file correctly. MUST INCLUDE THE WORD "Lab".
- Import the correct dependencies
- Write a smoke test (does the component load, period)
- Write a test that checks to see if the expected text is in the document 
  (that is, if you pass "John" and "Smith" as firstName and lastName, that should be in the document)
- Docs for Testing Library's queries: https://testing-library.com/docs/queries/about
- Run the tests via `npm run test:labs`

## Lab 3: Object

Upgrade our StudentDetail component to accept an entire object and render a better component

- Work in Lab03.tsx, which is a finished version of Lab01.tsx.
- Update the props for `StudentDetail` to accept a student object
  - You will likely have to define a `Student` object
- Update `StudentDetail` to render all the details of a Student. 
  - You can just dump it to an unordered list at first
  - Display the values by hard-coding the properties at first
  - Update to using a Bootstrap Card component: https://getbootstrap.com/docs/5.2/components/card/
  - As a challenge, you could see if you can iterate over the properties of the
    Student and generate the list items
- In `Lab03`, pass `exampleStudent` to `StudentDetail` instead of `firstName` and `lastName`.
- Go to /labs/lab-03 and see what the results look like

## Lab 4: Testing props as an object

Build a test for Lab03.tsx

- Name the test file correctly. MUST INCLUDE THE WORD "Lab".
- Import the correct dependencies
- Write a smoke test (does the component load, period)
- Write a test that checks to see if the expected text is in the document 
  (i.e. are any/some/most/all? of the values from the Student object rendering correctly?)
- Run the tests via `npm run test:labs`

