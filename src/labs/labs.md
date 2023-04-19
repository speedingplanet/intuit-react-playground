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

## Lab 8: State

Now we want to render a message to the browser on an event

- Working in `Lab08.tsx` (which is a solution for `Lab07.tsx`.)
- You're going to use a string as a piece of state in this component
- Call `useState` setting up a state property called `message`
- Update the return of `Lab08` to include a div where the `message` property will print to. Probably either above or below `PagerBar`. 
- Update the event handlers to call `setMessage` with a new message, instead of calling `console.log`
- Go to /labs/lab-08 to see what the results look like.

## Lab 9: Iterative state

What if we wanted to use state to track progress through an array?

- Working in `Lab09.tsx`.
- The "Next" and "Previous" buttons should now move through the array `words`.
- You'll need to update the following:
  - What should we track in state?
  - `handlePreviousClick` should display the previous word, unless it's at the beginning of the array
  - `handleNextClick` should display the next word, unless it's at the end of the array
  - You could use the index of the word, or the word itself, to solve these issues
  - The `return` statement in `Lab09` should display the current word. 
- Go to /labs/lab-09 to see what the results look like.
- CHALLENGE!
  - How would you refactor the code if the "Next" button should be disabled when there are no more words to display?
  - What about the same thing for the "Previous" button?

## Lab 10: Putting it all together

Let's build a student browser!

- At the core, we're going to swap out the `words` array for an array of students.
- Import `students` from `../data/all-data-typed`
- Swap out display a word from `words` for a `StudentDetail` component.
  - `StudentDetail` is already available at the bottom of `Lab10.tsx`.
- What will you pass to `StudentDetail` to display a student?
- How is that going to change when the event handlers are called?
- Visit /labs/lab-10 to see if it works.

## Lab 11

### Part 3: Reversing the sort

Note that we've moved `studentNames` outside of the component.

#### Types: 
- Add a type `SortDirection` that can be either 'asc' or 'desc'
- Add a type `SortConfig` that includes two properties: ``sortField``, which is optional and set to `SortNames`, and `sortDirection` which is, unsurprisingly `SortDirection`. 

#### State:

We will store sorting information in state. Change the `useState` call to return a `SortConfig` and a setter. The starting state should assume `sortDirection` is `asc` and have no `sortField`. Remember that you can give `useState` a type:

```typescript
let [person, setPerson] = useState<DBConnection>({firstName: 'John'})
```

#### Event Handlers: 

Update `handleSortStudents` so that it sets the `SortConfig` state. What happens if we sort on `firstName` after sorting on `lastName`? What happens if we click on `firstName` again? Write logic around these cases.

#### Component: 

After sorting studentNames, reverse the sort if `SortConfig.sortDirection` is `desc`. 

Try it out!

#### Challenge: 

Update the sort indicator to indicate whether the sort is 'asc' or 'desc'. You could do this with a component or a function that returns some text.

### Part 4: Filtering by last name

We've broken out features like sorting and filtering into their own components

#### Types: 
- Create an interface for `FilterStudentsWidget`. It should take one property `updateFilter` which is a custom event. What should the event handler be passed? What should it return?

#### Component: FilterStudentsWidget

Fill out the details of FilterStudentsWidget. You'll need a label and a text input field.

#### Event Handlers: FilterStudentsWidget

When the values in the text input field change, call `updateFilter` with the new value.

#### State: Lab11Part4

Add a `useState` call that will store the lastName filter.

#### Event Handlers: Lab11Part4

Create `handleUpdateFilter` so that it sets the `lastNameFilter` state. Pass `handleUpdateFilter` into `FilterStudentsWidget` with the appropriate attribute.

#### Component: Lab11Part4

Before the sort, filter the `studentNames` array. Filter the array into a **NEW** array (maybe call it `displayNames`?). Update the sort logic to work with the new array. Update the argument to `StudentList` to use the new array as well.

Try it out!

### Part 5: Adding a new Student

#### Types: 

- Add a type `StudentWithoutId`. It should be a `StudentNames` but without the `id` property. The `Omit` [utility type](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) will be helpful here. 
- Below the "Adding Students" section, add an interface for `AddStudentWidgetProps`. It should take one prop `submitAction` which will run when the form is submitted. What will it be passed? What will it return? 

#### Component: AddStudentWidget

You already have a starter form. It includes two fields (firstName and lastName) and a regular button. 

When you click on the "Add student" button, do the following:

- Gather the first name and last name into an object
- Call `submitAction` passing it that object
- Reset the form so its fields are cleared

There are at least two ways to do this:

- You could use controlled components to keep track of the data in the form. When the button is clicked, it calls the `submitAction` event handler with the appropriate information
- You could leave the form widgets uncontrolled and use an `onSubmit` action to gather the data.
  - Convert "Add Students" to a submit button (e.g. change its type)
  - Don't forget to prevent the default behavior on submitting
  - Probably use a FormData object to gather up all the data in the form

It's up to you which way you prefer!

#### State: Lab11Part4

Add a state to track an update flag. Until we move `studentNames` into state (which we are *NOT* doing here), we need a cheap-and-easy way to tell React to re-render this component. 

#### Event Handlers: Lab11Part4

Add `handleAddStudent`. It should receive a student from `AddStudentWidget`. It needs to do the following:

- Figure out what the next student id will be
- Assign that to the passed-in student
- Add the new student to the `studentNames` array
- Update the update flag to provoke re-rendering
- Don't forget to assign `handleAddStudent` to `AddStudentWidget` with the appropriate attribute.

Try it out, see if it works. Note that if you have sorted the students list, the new name will appear already sorted.

#### Challenge

Is there a way to highlight the newly-added name? If you want to get very fancy, can you highlight it with a fading effect? 