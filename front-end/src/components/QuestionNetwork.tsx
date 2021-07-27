const QuestionNetwork = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
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
        <tr>
          <td><input type="text" placeholder="name" title="Name of device" /></td>
          <td><input type="text" placeholder="location" title="Location" /></td>
          <td><input type="text" placeholder="purpose" title="Purpose" /></td>
        </tr>
      </tbody>
    </table>
  </>
);

export default QuestionNetwork;