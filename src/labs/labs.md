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

- Name the test file correctly. MUST INCLUDE THE WORD "Lab".
- Import the correct dependencies
  - If you want to test against *your* code, import from Lab01.tsx
  - If you want to test against the *solution* to Lab01, use Lab02.tsx
- Write a smoke test (does the component load, period)
- Write a test that checks to see if the expected text is in the document 
  (that is, if you pass "John" and "Smith" as firstName and lastName, that should be in the document)
- Docs for Testing Library's queries: https://testing-library.com/docs/queries/about
- Run the tests via `npm run test:labs`

## Lab 3: Object

Upgrade our StudentDetail component to accept an entire object and render a better component

- Work in Lab03.tsx, which is also a finished version of Lab01.tsx.
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
  - If you want to test against *your* code, import from Lab03.tsx
  - If you want to test against the *solution* to Lab03, use Lab04.tsx
- You'll need some dummy data to test against. Take a look at `data/all-data.ts` for examples.
- Write a smoke test (does the component load, period)
- Write a test that checks to see if the expected text is in the document 
  (i.e. are any/some/most/all? of the values from the Student object rendering correctly?)
- Run the tests via `npm run test:labs`

## Lab 5: Event handling

Setting up event handlers in a component

- Working in Lab05.tsx
- Set up and export a component called `PagerBar`. 
  - No props
  - Renders two buttons "Previous" and "Next"
  - Clicking on "Previous" logs to the console "You clicked on the previous button"
  - Clicking on "Next" logs to the console "You clicked on the next button"
- In the `Lab05` component, render `PagerBar` component. 
- Go to /labs/lab-05 to see what the results look like

## Lab 6: Custom events

Creating custom events in our component and then calling those custom events.

- Working in Lab06.tsx.
- The overall goal is to turn `PagerBar` into a component that has two custom events `clickPreviousButton` and `clickNextButton`
  - Create a `PagerBarProps` interface with two props:
    - `clickPreviousButton` which is a function that takes no arguments and returns nothing
    - `clickNextButton` same as above
  - Assign the Props to `PagerBar`
  - Hook up the custom events to be called when the Next and Previous buttons are clicked on
- Move the `handlePreviousClick` and `handleNextClick` event handlers *OUT* of `PagerBar` and into `Lab06`. 
- Pass those event handlers into `PagerBar` in the return statement for `Lab06`
  - Consider updating the event handler to say something a little different, so that it's clear that it's being called.
- Go to /labs/lab-06 to see what the results look like.

## Lab 7: Testing custom events

- Name the test file correctly. MUST INCLUDE THE WORD "Lab".
- Import the correct dependencies
  - If you want to test against *your* code, import from Lab06.tsx
  - If you want to test against the *solution* to Lab06, use Lab07.tsx
  - You'll need `userEvent` from `@testing-library/user-event`
- Setup
  - declare variables for `handlePreviousClick` and `handleNextClick`
  - Give them the appropriate type (`../common/common-types.ts` has a suggestion)
  - Create a `beforeEach` that will set up both as Jest mocks
- Write a smoke test that renders and clicks on the buttons in the component
  - No actual `expect` calls, just make sure it doesn't break
  - Remember if you use the `await` keyword before `user.click()`, you'll need to label 
    the function as `async`
- Write a test for the "Previous" button
  - Pass in `handlePreviousClick` as the event handler
  - Use `user-event` to trigger a click on the "Previous" button
  - Verify that the Jest mock has been called and has been called only once
- Write a test for the "Next" button
  - Pretty much the same as for the "Previous" button