pragma solidity ^0.5.0;

contract MyStringStore {
    string public myString = "Hi Mom";

    function set(string memory newString) public {
        myString = newString;
    }
}