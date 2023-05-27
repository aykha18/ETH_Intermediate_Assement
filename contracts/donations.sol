// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Donate2Syria{

    struct Donor
    {
        address from;
        string name;
        string message;
        uint timestamp;
    }    

    Donor[] donors;
    address payable public owner;

    constructor(){
        owner = payable(msg.sender);
    }


    function donate(string memory _name, string memory _message) payable public {
        require(msg.value >= 0,"Please Check you wallet for ETH balance");
        owner.transfer(msg.value);
        donors.push(Donor(msg.sender, _name, _message, block.timestamp));
    }

    function getDonorDetails() public view returns(Donor[] memory){
        return donors;
    }
}
