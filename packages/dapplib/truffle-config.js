require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember exchange hockey sleep flock gentle'; 
let testAccounts = [
"0x744399e73e34a4584cae63c983e03c263e8a227cc55a595da7f878439adb3eec",
"0x5bc2ab85c5c3a3f23b4d0d7f0f0890a6c47eaf8c06b94710358407368c9eb908",
"0x205af792a3d1da345951e32d7cf71048a4823ffb541de17a5baa309040d0932d",
"0x1049fc62aecc43e43025dcb9024322113640fe872b801f68a2183ff1ee7dbad6",
"0xcf35a26d808fc4f75f355474313ea35a334179273370af809671ab613505311d",
"0x93ea24e7b589c10b63929886bd6028d44257a09cb37a7c64c216b71018ce0820",
"0xea47322b43ceae15523f8bb56e9fb6fb4080ee0e3f0f7f7aa406bb2f4d8cd048",
"0x31e7c8d8de8bd3c1e7574a0f49c3ff406f8c6c16123c3b40f8e5ed0a06a08678",
"0xa4705aed0c02c03226c35c8d917e50b3874c0575431a8effa347efaa4e87e79b",
"0xd2d9f8b604cd27b11c4062c6eebbc44f43b3c74c3fcd705472cd02b2accb1cf7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


