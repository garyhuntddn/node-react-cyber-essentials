import "./App.scss";
import { Action } from "redux";
import { connect } from "react-redux";
import { Model, PanelConstants } from "./models/Model";
import Questionnaire from "./components/Questionnaire";
import Login from "./components/Login";
import FailedLogin from "./components/FailedLogin";

const mapStateToProps = ( state: Model ) => {
  return state;
};

const mapDispatchToProps = ( dispatch: ( action: Action ) => unknown ) => ( {} );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const App = ( model: Props ) => {
  return (
    <div className="App">
      <header>
        <h1>Cyber Essentials Questionnaire</h1>
      </header>
      <section>
        { model.panel === PanelConstants.Login && <Login { ...model } /> }
        { model.panel === PanelConstants.FailedLogin && <FailedLogin /> }
        { model.panel === PanelConstants.Questionnaire && <Questionnaire { ...model } /> }
      </section>
    </div >
  );
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
