// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

contract FlashCardScript is Script {
    function setUp() public {}

    function run() public {
        console.log("running");
        vm.broadcast();
    }
}
