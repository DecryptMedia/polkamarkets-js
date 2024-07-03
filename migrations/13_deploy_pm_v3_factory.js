const PredictionMarketV3Factory = artifacts.require("PredictionMarketV3Factory");
const ERC20PresetMinterPauser = artifacts.require("ERC20PresetMinterPauser");
const PredictionMarketV3 = artifacts.require("PredictionMarketV3");
const RealityETH_ERC20_v3_0 = artifacts.require("RealityETH_ERC20_v3_0");

let { TOKEN, PM3_ADDRESS, REALITIO_ADDRESS } = process.env;

module.exports = async function(deployer) {
  TOKEN = TOKEN || (await ERC20PresetMinterPauser.deployed()).address;
  PM3_ADDRESS = PM3_ADDRESS || (await PredictionMarketV3.deployed()).address;
  REALITIO_ADDRESS = REALITIO_ADDRESS || (await RealityETH_ERC20_v3_0.deployed()).address;

  await deployer.deploy(
    PredictionMarketV3Factory,
    TOKEN,
    '1000000000000000000',
    PM3_ADDRESS,
    REALITIO_ADDRESS,
    { gas: 50000000 }
  );
}
