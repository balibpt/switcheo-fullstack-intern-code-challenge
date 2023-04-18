// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceReader {
    struct Balances {
        address token;
        uint balance;
    }

    function getBalance(
        address walletAddress,
        address[] memory tokenAddresses
    ) public view returns (Balances[] memory) {
        Balances[] memory balance = new Balances[](tokenAddresses.length);
        for (uint i = 0; i < tokenAddresses.length; i++) {
            uint tokenBalance = IERC20(tokenAddresses[i]).balanceOf(
                walletAddress
            );
            balance[i] = Balances(tokenAddresses[i], tokenBalance);
        }
        return balance;
    }
}
