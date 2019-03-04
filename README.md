# Labrador Coding Challenge

## Tasks

1. Write a REST endpoint (could be JSON or GraphQL) in Node.js (8.10+) which will expose a representation of the attached bill.
2. Write a webpage that consumes that endpoint (React/Redus + Styled Components are our frameworks of choice).

No need to expose all the data in the bill, just cherry pick what you think it's most important.

We hope you'll enjoy coding and look forward to reviewing the solution.
Please do not hesitate to ask us any questions.

### Clone repo
```
git clone git@github.com:Gunzalez/labrador.git

cd labrador
```

### start api
The api is on port 2000
```
cd labrador/server
yarn start
```

### start client
Create react app will start on port 3000
```
cd labrador/client
yarn start
```

## Notes
1. I would like to thank you for the opportunity to take this test, if anything it revealed my weakness
2. Uses styled-components but I am very sorry that I completely forgot your style guide (I had for technical tests over the weekend)
3. Redux I could not get working (work so far exists here https://github.com/Gunzalez/labrador/tree/redux-branch)
4. My TDD is limited I confess - I know why tests are needed, how to pass them, how to write more when I see a few, but difficult for me to start off on my own.