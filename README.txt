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
2. suppose vasa has to give 1 copy to vaibhav, then he will encrypt the zipped media file with with vaibhav's public key. then he will add the encrypted file to a folder and encrypt it with his(vasa's) private key.

devlopment:
1. make account for a user.
2. make a page for the user to upload the media file.
	FIELDS IN THE PAGE: 
	upload media file.
	number of copies to be issued.
	take the username from the account.
	take the timestamp from the time when he makes the files.
	(Q: do we need to publish this on blockchain before we have issued any copies?)

	procedure:
	1. take the zip file from the form and encrypt it.(find library to encrypt files)
	2. now take that encrypted stuff and the transactionrecord(use copy number for initialization) and put it in the folder and then again encrypt it(with same library)
	(Q: do we publiish the hash or we keep the encrypted files till we don't issue them?)
3. make the page for issuing the copies.
	FIELDS NEEDED.
	address of the person you want to give the copy to.
	number of copies issued.

   zip the file accordingly with the transationrecords and publish the hash on the blockchain.


