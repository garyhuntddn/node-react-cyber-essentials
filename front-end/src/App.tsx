import "./App.scss";
import { connect } from "react-redux";
import { Model, PanelConstants } from "./models/Model";
import Questionnaire from "./components/Questionnaire";
import Login from "./components/Login";
import FailedLogin from "./components/FailedLogin";
import CreateGroup from "./components/CreateGroup";
import OptionsPanel from "./components/OptionsPanel";

const mapStateToProps = ( state: Model ) => {
  return state;
};

const mapDispatchToProps = () => ( {} );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const App = ( model: Props ) => {
  return (
    <div className="App">
      <header>
        <h1 style={ { color: model.options.favouriteColor } }>Cyber Essentials Questionnaire</h1>
      </header>
      <section>
        { model.panel === PanelConstants.Login && <Login { ...model } /> }
        { model.panel === PanelConstants.FailedLogin && <FailedLogin /> }
        { model.panel === PanelConstants.Questionnaire && <Questionnaire { ...model } /> }
        { model.panel === PanelConstants.CreateGroup && <CreateGroup { ...model } /> }
        { model.panel === PanelConstants.OptionsPanel && <OptionsPanel { ...model.unsavedOptions } /> }
      </section>
    </div >
  );
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
