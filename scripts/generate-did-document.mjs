// Generate a did:web document using SEED env var
import "dotenv/config";
import { fromString } from "uint8arrays/from-string";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { DID } from "dids";
import KeyResolver from "key-did-resolver";

const seed = fromString(process.env.KEY_SEED, "base16");
const provider = new Ed25519Provider(seed);
const did = new DID({ provider, resolver: KeyResolver.getResolver() });
await did.authenticate();

console.log(did.id);
