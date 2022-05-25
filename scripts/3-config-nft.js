import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xFb3178350F35080483F3afE2aF55f19Adc1b8f44");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cape of Survey Corps",
        description: "This NFT will give you access to AttackOnTitanDAO!",
        image: readFileSync("scripts/assets/attack on titan cape.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();