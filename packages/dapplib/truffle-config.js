require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift return machine exchange grace slender forget gather'; 
let testAccounts = [
"0xb47d4c8510374bd13f96bc023c146916bec9fb9a89527975bd3a2e1cb909be4c",
"0x7a536b1f9c2a6c10d74984da32a8af3da5963590eb9ebaee7fa17c2a1aa388c7",
"0xe79622ed8d1a7fd97539e513d7e8a52332951e3507bbf4cda0acaa8bbe54608d",
"0xc53f91a33f17aab931b708b1213afe3c7fc53764e97a56975d5be9d17676f202",
"0x03f925a7c9337a23f9ff0607816c8e4ec3f96242bac4b47f5fec68069ca9e405",
"0x2bb1342d6a91bc1ba87c24167abe31983425b06d042cc7ecf8ca431d231887bb",
"0x8659aa980ef27bbdf699b213c891734a788e8837ab0e4d7f6104503f385f7f12",
"0x657296a12302c5ea2f5e3d32d890e2e1f13a57b72384c337381333df13853e6c",
"0x9ac77388537e9fdf1a509a74748895bd6cfd255b23a157ccd90eaed85a9c8b07",
"0xebda711090bb0572144bc13e91ceccb7cb76a35bc452ba901aa68207c1da2104"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
