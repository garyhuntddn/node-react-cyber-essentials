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
4. initial react implementation and theory
5. HTML styling
6. initial redux implementation and theory
7. pulled apart the initial react implementation to break it into components
8. read-only version of the components based upon the read-write versions
9. node JS server based upon express
10. introduction to postman
11. routing of all messages to the server
12. introduction of groups to implement the concept of multiple sets of answers
13. performance tuning of which messages were sent to the server
14. mechanism for authenticating users/groups
15. pino implemnetation for logging
16. introduction to docker
17. introduction to databases including SQL server and mongo db
18. initial mongo db docker settings
19. convert the array based storage of users into one storing them within mongo
20. implementation of HTTP headers for authentication
21. implementation of panel switching and the login/logout panels
22. implementation of lots of HTML input types in an options panel
23. refactoring the options into a slice
24. refactoring of the reducers into combineReducers
25. multiple copies of the options, one for the active options, one for the editing options
26. reducers which use the same action
