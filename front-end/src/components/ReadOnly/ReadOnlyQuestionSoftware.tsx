import { useState } from "react";
import { Answer } from "../../models/Answer";
import { Hardware } from "../../models/Hardware";
import { Network } from "../../models/Network";
import { Software, SoftwareType } from "../../models/Software";

const ReadOnlyQuestionSoftware = ({  answer,  }: {  answer?: Answer,  }) => {
  const [newRowState, setNewRowState] = useState({ name: "", version: "" });
  const softwareAnswers = answer as Array<Software> || [];

  return (
    <>
      
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {
            softwareAnswers.map((m, i) =>
              <tr key={i}>
               
                <td><span>{m.name}</span></td>
                <td><span>{m.version}</span></td>
              </tr>
            )
          }
          
        </tbody>
      </table>
    </>
  );
};

export default ReadOnlyQuestionSoftware;