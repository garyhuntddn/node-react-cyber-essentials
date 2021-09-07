# node-react-cyber-essentials

The plan:

1. model the cyber essentials data capture
2. build a react+redux based Ux
3. use socket-io for message transfer to a server-side component that can store the message stream
4. provide an export into JSON

What we've covered:

1. requirement capture 
  * anylysing the orignal questions and turning them into something we could code
  * identifying the types of question
  * identifying what was required and what wasn't
2. introduction to javascript
  * variable types
  * arrays
  * maps
3. introduction to typescript
  * types
  * enums
  * async
4. introduction to vs code
5. introduction to github
6. introduction to npm
7. initial react implementation and theory
8. HTML styling in SASS and SCSS
9. scoped styling using SCSS modules
10. initial redux implementation and theory
11. pulled apart the initial react implementation to break it into components
12. read-only version of the components based upon the read-write versions
13. introduction to JEST for unit testing
14. github actions to execute the JEST tests on commit/merge
15. node JS server based upon express
16. introduction to postman
17. routing of all messages to the server
18. introduction of groups to implement the concept of multiple sets of answers
19. performance tuning of which messages were sent to the server
20. mechanism for authenticating users/groups
21. pino implemnetation for logging
22. introduction to docker
23. introduction to databases including SQL server and mongo db
24. initial mongo db docker settings
25. convert the array based storage of users into one storing them within mongo
26. implementation of HTTP headers for authentication
27. implementation of panel switching and the login/logout panels
28. implementation of lots of HTML input types in an options panel
29. refactoring the options into a slice
30. refactoring of the reducers into combineReducers
31. multiple copies of the options, one for the active options, one for the editing options
32. reducers which use the same action
33. firing the same action from multiple events
