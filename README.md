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
8. HTML styling
9. initial redux implementation and theory
10. pulled apart the initial react implementation to break it into components
11. read-only version of the components based upon the read-write versions
12. node JS server based upon express
13. introduction to postman
14. routing of all messages to the server
15. introduction of groups to implement the concept of multiple sets of answers
16. performance tuning of which messages were sent to the server
17. mechanism for authenticating users/groups
18. pino implemnetation for logging
19. introduction to docker
20. introduction to databases including SQL server and mongo db
21. initial mongo db docker settings
22. convert the array based storage of users into one storing them within mongo
23. implementation of HTTP headers for authentication
24. implementation of panel switching and the login/logout panels
25. implementation of lots of HTML input types in an options panel
26. refactoring the options into a slice
27. refactoring of the reducers into combineReducers
28. multiple copies of the options, one for the active options, one for the editing options
29. reducers which use the same action
30. firing the same action from multiple events
