// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Collectible {
    address public owner;
    uint256 public totalNFTs;

    struct NFT {
        address owner;
        uint256 price;
        bool status; // true: listed, false: acquired
        string title;
        string description;
        string media;
    }


}