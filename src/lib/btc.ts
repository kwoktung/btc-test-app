import { HDKey } from "@scure/bip32";
import * as bip39 from '@scure/bip39';
import * as btc from '@scure/btc-signer';
import { Session } from 'next-auth'

// test mnemonic
const mnemonic = 'erupt search math distance appear gauge spike step blue broom ketchup brass'

const seed = bip39.mnemonicToSeedSync(mnemonic);

const hdkey1 = HDKey.fromMasterSeed(seed);

export const getUserAccountId = (user: Session['user']) => {
    console.log(user)
    return 1111
}

export const getNextDepositAddress = ({ userId }: { userId: number }) => {
    const keys = hdkey1.derive(`m/44'/0'/0'/0/${userId}`)
    if (keys.publicKey) {
        const address = btc.p2pkh(keys.publicKey)
        console.log(address)
        return address
    }
    return null
}


export const sendBtcFromAddress = ({ fromAddress, toAddress, amount }: { fromAddress: string, toAddress: string, amount: number }) => {
    console.log(`Sending ${amount} BTC from ${fromAddress} to ${toAddress}`)
    return true
}