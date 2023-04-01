// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "contracts/VerifierNFT.sol";
import "contracts/ResearchPaperNFT.sol";

contract Shoodh {
    VerifierNFT public verifierNFT;
    ResearchPaper public researchPaper;


    enum StatusReq{
        WAITING_FOR_APPROVAL,
        APPROVED,
        REJECTED,
        SUCCESS
    }

    // mapping and variables

    // user strcut


    mapping(address=>uint) public contributions;
    mapping(address=>uint) public noResearch;
    mapping(address=>uint[]) public  userResearches;

    // researchers
    struct Research{
        uint id;
        uint no_of_verifications;
        mapping(address=>bool) verifiers;
        uint id_cont;
        uint[] refrenced;
        string uri;
        address author;
        uint[] states;
    }

    struct RequestToUpdate{
        uint reqId;
        uint original_id;
        uint new_id;
        address from;
        address to;
        StatusReq status;
    }

    //evnets
    //research formed
    event ResearchFormed(
        uint id,
        string url,
        address indexed  author
    );
    //contribution
    event Contribution(
        address indexed  to,
        address indexed  from,
        uint amt
    );
    // req to update
    event RequestUpdate(
        uint reqId,
        uint original_id,
        uint new_id,
        address indexed from,
        address indexed  to
    );
    // req to update approved
    event ApproveUpdate(
        uint reqId,
        uint original_id,
        uint new_id,
        address indexed from
    );
    

    RequestToUpdate[] public requestToUpdates;
    mapping(address=>bool) public isreseacher;
    mapping(uint=>Research) public researches;
    uint public no_of_research = 0;


    constructor(
        VerifierNFT _verFT,
        ResearchPaper _rft
        
    ) {
        verifierNFT = _verFT;
        researchPaper = _rft;
    }

    //Function to create research Paper NFT

    function createResearchPaper(string calldata _uri, uint _id_cont, uint[] calldata _refrenced) public {
        require(_id_cont >=0 && _id_cont <= no_of_research,"not a valid id"); //0 means no continuation
        Research storage currReq = researches[no_of_research
        +1] ;
        no_of_research++;
        currReq.id = no_of_research;
        currReq.no_of_verifications = 0;
        currReq.id_cont = _id_cont;
        currReq.author = msg.sender;
        currReq.refrenced = _refrenced;
        currReq.uri = _uri;
        currReq.states = [no_of_research];
        researchPaper.safeMint(msg.sender, _uri);

        isreseacher[msg.sender] = true;
        noResearch[msg.sender]++;
        userResearches[msg.sender].push(no_of_research-1);

        emit ResearchFormed(no_of_research,_uri,msg.sender);
    }

    //Contribute to a researcher
    function contribute(uint _amt, address payable _to) public payable {
        require(_amt >0 && msg.value>0,"sending an negative amount");
        _to.transfer(msg.value);    

        contributions[msg.sender] +=_amt; 

        emit   Contribution(_to,msg.sender,_amt);
    }


    //verify a research
    function verifyResearch(uint _id, uint _myid) public {
        require(_id >0 && _id <= no_of_research,"not a valid id");
        require(verifierNFT.ownerOf(_myid)==msg.sender,"not a valid validator");
        require(researches[_id].verifiers[msg.sender]==false,"already verified");
        Research storage currReq = researches[_id];
        currReq.no_of_verifications++;
        currReq.verifiers[msg.sender] = true;    
    }

    //request an researcher to update a research with another
    function requestResearch(uint _original_id, uint _new_id) public {
        require(_original_id >0 &&_original_id <= no_of_research,"not a valid original id");
        require( _new_id >0 &&  _new_id <= no_of_research,"not a valid new id");
        RequestToUpdate memory currReq;
        currReq.reqId = requestToUpdates.length;
        currReq.original_id =  _original_id;
        currReq.new_id =  _new_id;
        currReq.from = msg.sender;
        currReq.status = StatusReq.WAITING_FOR_APPROVAL;
        currReq.to = researchPaper.ownerOf(_original_id-1);
        requestToUpdates.push(currReq);   // 0 id to req 1

        emit RequestUpdate(requestToUpdates.length,_original_id,_new_id,msg.sender,researchPaper.ownerOf(_original_id));
    }
    // approving the request 

    function approveRequest(uint _reqid) public {
        require(_reqid >=0 && _reqid <= requestToUpdates.length,"invalid request ID" );
        RequestToUpdate storage currreq = requestToUpdates[_reqid];  //0->first req
        require(currreq.to == msg.sender,"only owner can approve");
        currreq.status = StatusReq.APPROVED;

        Research storage req = researches[currreq.original_id];
        req.states.push(currreq.new_id);
        currreq.status = StatusReq.SUCCESS;

        emit ApproveUpdate(_reqid,currreq.original_id,currreq.new_id,currreq.from);
    }

    function getResearches(address _user) public view returns(uint[] memory){
        return userResearches[_user];
    }




}