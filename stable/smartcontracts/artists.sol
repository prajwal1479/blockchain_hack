pragma solidity ^0.4.0;
/*
this contract contains details of all the people who are an artist 
or have applied for artist approval.
it contains profile of an artist. 

*/
contract Artists{
	struct artistProfile {
		address artist_addr;
		bool isArtist;
		string approval_timestamp;
		string username;
		string artist_type;
		string [] products;
		}
	
	mapping(address => artistProfile) ApprovedArtists;
	mapping (string => string) ProductNameMapping;
	

	//Validity of all the given arguments will be checked by the api.
	function ApproveArtist(address user_addr,string username, string artist_type, string timestamp ) public returns(bool isApproved){
		var artist_profile = ApprovedArtists[user_addr];

		artist_profile.artist_addr = user_addr;
		artist_profile.isArtist = true;
		artist_profile.approval_timestamp = timestamp;
		artist_profile.username = username;
		artist_profile.artist_type = artist_type;
		

		return true;
		//the api will recieve this true and inform that the approval is done.
	}

	/*the api will check artist address before calling this function.
	encryp_media = sha256(zipped product encrypted by creators public key)
	*/
	function AddProduct(address artist_addr, string encryp_media, string product_name) public returns(bool isPublished){
		ApprovedArtists[artist_addr].products.push(encryp_media);

		ProductNameMapping[encryp_media]= product_name;
		

		return true;
	}

	//used by api before calling AddProduct to ensure that the artist is valid.
	function CheckArtistApprovalStatus(address addr) public returns(bool isArtist){
		if(ApprovedArtists[addr].isArtist){
			return true;
		}
		else{
			return false;
		}
	}

	//used by api to check if the product is valid or not after recieving the product.
	function isValidProduct(address artist_addr, string encryp_media) public returns(bool isValid){
		for (var i = 0; i < ApprovedArtists[artist_addr].products.length; i++){
			if(keccak256(ApprovedArtists[artist_addr].products[i]) == keccak256(encryp_media)){
				return true;
			}
		}

		return false;
		
	}


	function getArtistProfile(address artist_addr) public returns(
		address addr,
		bool isArtist,
		string approval_timestamp,
		string username,
		string artist_type,
		string []
		){		
		return(ApprovedArtists[artist_addr].artist_addr,
			ApprovedArtists[artist_addr].isArtist,
			ApprovedArtists[artist_addr].approval_timestamp,
			ApprovedArtists[artist_addr].username,
			ApprovedArtists[artist_addr].artist_type,
			ApprovedArtists[artist_addr].products);
	}
	

}