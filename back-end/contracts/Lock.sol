// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Lock {
    struct Dude {
        uint32 age;
        string name;
    }

    event InfoAdded(Dude indexed);

    function addInfo(uint32 _age, string memory _name) public {
        Dude memory dude = Dude(_age, _name);
        emit InfoAdded(dude);
    }
}
