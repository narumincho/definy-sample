import * as out from "./out";

const sampleUser: out.SampleUser = {
  name: "ナルミンチョ",
  ageMaybe: out.Maybe.Just(22),
};

const sampleUserAsBinary: Uint8Array = new Uint8Array(
  out.SampleUser.codec.encode(sampleUser)
);

const sampleUserDecoded: out.SampleUser = out.SampleUser.codec.decode(
  0,
  sampleUserAsBinary
).result;

console.log(sampleUserDecoded);
