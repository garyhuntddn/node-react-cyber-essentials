const QuestionSoftware = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
  <>
    { placeHolder && <div>{ placeHolder }</div> }
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" placeholder="name" title="Name of device" /></td>
          <td><input type="text" placeholder="version" title="Version" /></td>
          <td><input type="text" placeholder="type" title="Type" /></td>
        </tr>
      </tbody>
    </table>
  </>
);

export default QuestionSoftware;