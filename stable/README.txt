WebApp => Mean Stack

1. Making the zip file = media file + trackrecord.txt
2. take a hash of the zip file and put it in blockchain 
3. Using the fields in trackrecord.txt make a smart contract. 


Trackrecord.txt
1. Current Owner: owner name
2. History: Add the transactions every time a transaction happens and then take the hash of the new file.
example transaction(previous owner to new owner with time stamp) 

process:
1. issuer(vasa) issues 10 copies of the media file.
2. suppose vasa has to give 1 copy to vaibhav, then he will encrypt the media file with with vaibhav's public key. then he will add the encrypted file to a folder and encrypt it with his(vasa's) private key.

devlopment:
1. make account for a user.
2. make a page for the user to upload the media file.
	FIELDS IN THE PAGE: 
	upload media file.
	number of copies to be issued.
	take the username from the account.
	take the timestamp from the time when he makes the files.
	(Q: do we need to publish this on blockchain before we have issued any copies?)
3. make the page for issuing the copies.
	FIELDS NEEDED.
	address of the person you want to give the copy to.
	number of copies issued.

   zip the file accordingly with the transationrecords and publish the hash on the blockchain.

Doubts =>PAGES map:
admin.html=> do we have to write the approval in smart contract,
			where are we going to store the approved data(mongodb/block chain)?
 

