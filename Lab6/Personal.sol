//SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;

contract PersonalBank {
    address owner;
    mapping(string=> bool) valid_ids;
    mapping(string=> bool)  cheques;
    mapping(address=>string[]) user_record;
  
    
    constructor() public payable {
        owner = msg.sender;
    }
    
    fallback() external payable {
    }
    
    function cashCheque(address payable to, uint256 amount, string memory id,  bytes32 r, bytes32 s, uint8 v) public only_owner() chq_not_cashed(id){
        bytes32 messageHash = keccak256(abi.encodePacked(to, amount));
        
        bytes32 messageHash2 = keccak256(abi.encodePacked(
            "\x19Ethereum Signed Message:\n32", messageHash
        ));
        
        require(ecrecover(messageHash2, v, r, s) == owner, "BAD SIGNATURE");
        
        to.transfer(amount);
        cheques[id]=true;
        require(cheques[id] == true ,"Error: mapping updation FAILED");
        user_record[to].push(id);
    }
    
    function add_id(string memory id) public only_owner(){
        require(bytes(id).length == 3, "Error: invalid ID FORMAT!");
        valid_ids[id]=true;
        require(valid_ids[id] == true ,"Error: mapping updation FAILED");
        
    }
    modifier chq_not_cashed(string memory chq_id){
        require(valid_ids[chq_id] == true && cheques[chq_id] == false ,"Error: Multiple Cheque Cashing Attempted!");
        _;
    }
    
    modifier only_owner(){
       require(owner==msg.sender,"Error: Invalid Transaction");
         _;
    }
}