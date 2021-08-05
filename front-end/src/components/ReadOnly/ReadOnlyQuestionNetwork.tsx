import { Answer } from "../../models/Answer";
import { Network } from "../../models/Network";

const ReadOnlyQuestionNetwork = ( { answer }: { answer?: Answer } ) => {
  const networkAnswers = ( answer as Array<Network> ) || [];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          { networkAnswers.map( ( m, i ) => (
            <tr key={ i }>
              <td>
                <span>{ m.name }</span>
              </td>
              <td>
                <span>{ m.location }</span>
              </td>
              <td>
                <span>{ m.purpose }</span>
              </td>
            </tr>
          ) ) }
        </tbody>
      </table>
    </>
  );
};

export default ReadOnlyQuestionNetwork;
