import { Answer } from "../models/Answer";
import { Network } from "../models/Network";

const QuestionNetwork = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => {
  const networkAnswers = answer as Array<Network> || [];

  return (
    <>
      { placeHolder && <div>{ placeHolder }</div> }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {
            networkAnswers.map( m =>
              <tr>
                <td><input type="text" placeholder="name" title="Name of device" value={ m.name } /></td>
                <td><input type="text" placeholder="location" title="Location" value={ m.location } /></td>
                <td><input type="text" placeholder="purpose" title="Purpose" value={ m.purpose } /></td>
              </tr>
            )
          }
          <tr>
            <td><input type="text" placeholder="name" title="Name of device" /></td>
            <td><input type="text" placeholder="location" title="Location" /></td>
            <td><input type="text" placeholder="purpose" title="Purpose" /></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionNetwork;