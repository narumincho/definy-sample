import * as definyCore from "definy-core";
import * as definyCoreData from "definy-core/source/data";
import * as definyCoreType from "definy-core/schema/type";
import * as definyCoreTypePartMap from "definy-core/schema/typePartMap";
import { promises as fileSystem } from "fs";
import * as prettier from "prettier";

const sampleUserId = "6530304b1898543e974ad2561dc1423a" as definyCoreData.TypePartId;

const sampleCommitId = "dadcef6c7be958e090c0bd9054a4f260" as definyCoreData.CommitId;

const sampleProjectId = "4733b56eef6b336cde5ac9f78dc8618a" as definyCoreData.ProjectId;

const typePartMap: ReadonlyMap<
  definyCoreData.TypePartId,
  definyCoreData.TypePart
> = new Map([
  [
    sampleUserId,
    {
      name: "SampleUser",
      description:
        "サンプルユーザー. 名前(必須)と年齢(必須ではない)が含まれている",
      projectId: sampleProjectId,
      createCommitId: sampleCommitId,
      attribute: definyCoreData.Maybe.Nothing(),
      typeParameterList: [],
      body: definyCoreData.TypePartBody.Product([
        {
          name: "name",
          description: "ユーザー名",
          type: definyCoreType.String,
        },
        {
          name: "ageMaybe",
          description: "年齢",
          type: definyCoreType.Maybe(definyCoreType.Int32),
        },
      ]),
    },
  ],
]);

const typeScriptCode = prettier.format(
  definyCore.generateTypeScriptCodeAsString(
    new Map([...definyCoreTypePartMap.typePartMap, ...typePartMap])
  ),
  { parser: "typescript" }
);

fileSystem.writeFile("out.ts", typeScriptCode).then(() => {
  console.log("output TypeScript code!");
});
