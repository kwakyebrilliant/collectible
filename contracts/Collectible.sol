// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Collectible {
    address public owner;
    uint256 public totalNFTs;

    //struct here
    struct NFT {
        address owner;
        uint256 price;
        bool status; // true: listed, false: acquired
        string title;
        string description;
        string media;
    }

    //mappings
    mapping(uint256 => NFT) public nfts;
    mapping(address => uint256[]) public userToNFTs;
    mapping(address => uint256[]) public userToAcquiredNFTs;

    //events
    event NFTCreated(uint256 indexed tokenId, address indexed owner);
    event NFTListed(uint256 indexed tokenId, uint256 price);
    event NFTAcquired(uint256 indexed tokenId, address indexed buyer);
    event NFTResold(uint256 indexed tokenId, uint256 newPrice);

    //constructor
    constructor() {
        owner = msg.sender;
    }

    //modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
     
    //create NFT function
    function createNFT(
        uint256 _price,
        string memory _title,
        string memory _description,
        string memory _media
    ) external {
        require(_price > 0, "Price must be greater than 0");
        totalNFTs++;
        nfts[totalNFTs] = NFT({
            owner: msg.sender,
            price: _price,
            status: true,
            title: _title,
            description: _description,
            media: _media
        });

        userToNFTs[msg.sender].push(totalNFTs);

        emit NFTCreated(totalNFTs, msg.sender);
    }

    //Function to list NFTs created by a specific user
    function listNFTbyUser(address _user) external view returns (uint256[] memory) {
        return userToNFTs[_user];
    }

    //Function to list all NFTs on the platform
    function listAllNFT() external view returns (uint256[] memory) {
        uint256[] memory allNFTs = new uint256[](totalNFTs);
        for (uint256 i = 1; i <= totalNFTs; i++) {
            allNFTs[i - 1] = i;
        }
        return allNFTs;
    }

    //Function to allow a user to buy an NFT
    function buyNFT(uint256 _tokenId) external payable {
        require(_tokenId <= totalNFTs, "Invalid NFT tokenId");
        NFT storage nft = nfts[_tokenId];
        require(nft.status == true, "NFT is not listed for sale");
        require(msg.value >= nft.price, "Insufficient funds");
        require(nft.owner != msg.sender, "You cannot buy your own NFT");

        nft.status = false;
        userToAcquiredNFTs[msg.sender].push(_tokenId);

        address payable previousOwner = payable(nft.owner);
        previousOwner.transfer(nft.price);

        nft.owner = msg.sender;

        emit NFTAcquired(_tokenId, msg.sender);
    }


    //Function to list all acquired NFTs by a user
     function listNFTAcquired() external view returns (uint256[] memory) {
        return userToAcquiredNFTs[msg.sender];
    }

    //Function to allow a user to sell an acquired NFT
    function resellNFT(uint256 _tokenId, uint256 _newPrice) external {
        require(_tokenId <= totalNFTs, "Invalid NFT tokenId");
        NFT storage nft = nfts[_tokenId];
        require(nft.owner == msg.sender, "You are not the owner of this NFT");
        require(nft.status == false, "NFT must be acquired to be resold");

        nft.price = _newPrice;
        nft.status = true;

        emit NFTResold(_tokenId, _newPrice);
    }    

}