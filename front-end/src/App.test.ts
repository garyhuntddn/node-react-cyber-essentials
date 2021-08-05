import { ChangeView } from "./actions/ChangeViewAction";
import { UpdateAnswer } from "./actions/UpdateAnswerAction";
import { answers } from "./models/answerList";
import { ViewConstants } from "./models/Model";
import Reducers from "./reducers/Reducers";
//import * as actions from '../actions/posts/getPost';
//import { UPDATE_POST_SUCCESS } from '../actions/posts/updatePost';
//import expect from "expect";
//import getPostMock from '../mocks/getPostMock';

describe( "reducer tests", () => {
  it( "should return the initial state", () => {
    expect( Reducers( { answers, view: ViewConstants.Editable }, {} as any ) )
      .toEqual( { answers, view: ViewConstants.Editable } );
  } );

  it( "should update the view to ReadOnly", () => {
    expect( Reducers( { answers, view: ViewConstants.Editable }, ChangeView( ViewConstants.ReadOnly ) ) )
      .toEqual( { answers, view: ViewConstants.ReadOnly } );
  } );

  it( "should update the view to Editable", () => {
    expect( Reducers( { answers, view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.Editable ) ) )
      .toEqual( { answers, view: ViewConstants.Editable } );
  } );

  it( "should not the change the view to Editable", () => {
    expect( Reducers( { answers, view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.ReadOnly ) ) )
      .toEqual( { answers, view: ViewConstants.ReadOnly } );
  } );

  it( "should not the change the view to ReadOnly", () => {
    expect( Reducers( { answers, view: ViewConstants.Editable }, ChangeView( ViewConstants.Editable ) ) )
      .toEqual( { answers, view: ViewConstants.Editable } );
  } );

  it( "should add an answer for A", () => {
    expect( Reducers( { answers, view: ViewConstants.Editable }, UpdateAnswer( "A", "some text" ) ) )
      .toHaveProperty( "answers.A", "some text" );
  } );
} );
