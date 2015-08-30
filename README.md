leboncoin-api
=============

API pour le site LeBonCoin

Tasks list
----------
DONE:
- Connexion au site

TODO:
- Poster une annonce
	- depuis le code
	- depuis un fichier
- Lister ses annonces
- Supprimer une annonce

Comment le compiler
-------------------
Nécessite grunt

	npm install
	npm install -g phantomjs
	grunt

Comment le lancer
-----------------
LOGIN="test@test.com" PASSWORD="MYPASSWORD" node build/leboncoin-cli.js