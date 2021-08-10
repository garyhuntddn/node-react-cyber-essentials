export const persistanceMiddleware = ( store: any ) => ( next: any ) => async ( action: any ) => {
  const url = "http://localhost:2999/messages";

  await fetch( url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( action )
  } );

  // log a fancy message and action
  console.log( action );

  // continue to the next action
  return next( action );
};