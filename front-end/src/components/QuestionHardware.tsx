const QuestionHardware = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
  <>
    { placeHolder && <div>{ placeHolder }</div> }
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>OS</th>
          <th>Version</th>
          <th>No. of virtuals</th>
          <th>Location</th>
          <th>Quantity</th>
          <th>Purpose</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" placeholder="name" title="Name of device" /></td>
          <td><input type="text" placeholder="make" title="Make" /></td>
          <td><input type="text" placeholder="model" title="Model" /></td>
          <td><input type="text" placeholder="os" title="OS" /></td>
          <td><input type="text" placeholder="featureVersion" title="Version" /></td>
          <td><input type="text" placeholder="numberOfVirtuals" title="No of virtuals" /></td>
          <td><input type="text" placeholder="location" title="Location" /></td>
          <td><input type="number" placeholder="quantity" title="Quantity" /></td>
          <td><input type="text" placeholder="purpose" title="Purpose" /></td>
          <td><input type="text" placeholder="type" title="Type" /></td>
        </tr>
      </tbody>
    </table>
  </>
);

export default QuestionHardware;