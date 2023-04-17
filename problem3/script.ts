import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/")

const addresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]

const Abi = [
  "function balanceOf(address account) external view returns (uint256)",
  "function decimals() external view returns (uint8)"
]

const contract = new ethers.Contract("0xc0ecb8499d8da2771abcbf4091db7f65158f1468", Abi, provider)


const balances = async () => {
  const d = await contract.decimals()
  addresses.forEach( async (address) => {
    const balance = await contract.balanceOf(address)
    console.log(`${address} ${ethers.formatUnits(balance, d)}`)
  })
}

balances();
