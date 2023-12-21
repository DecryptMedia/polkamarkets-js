const { SmartAccount } = require('@particle-network/aa');

class PolkamarketsSmartAccount extends SmartAccount {

  static singleton = (() => {
    let smartAccount;

    function createInstance(provider, networkConfig) {
      const options = {
        projectId: networkConfig.particleProjectId,
        clientKey: networkConfig.particleClientKey,
        appId: networkConfig.particleAppId,
        aaOptions: {
          accountContracts: {
            simple: [{
              chainId: networkConfig.chainId,
              version: '1.0.0',
            }],
          }
        },
      };

      const instance = new PolkamarketsSmartAccount(provider, options);
      instance.setSmartAccountContract({ name: 'SIMPLE', version: '1.0.0' })
      return instance;
    }

    return {
      getInstance: (provider, networkConfig) => {
        if (!smartAccount) {
          smartAccount = createInstance(provider, networkConfig);
        }
        return smartAccount;
      },
      clearInstance: () => {
        smartAccount = null;
      }
    };
  })();
}

module.exports = PolkamarketsSmartAccount;
