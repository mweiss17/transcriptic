# Vanilla Node 


###Installation Guide
     
###IF YOU DON'T HAVE NODE... Install it:
	git clone https://github.com/joyent/node.git
	cd node/
	git checkout v0.12.0
	./configure
	make
	sudo make install

###Install this repo
	git clone git@github.com:mweiss17/vanilla-node.git

###Install packages from package.json:
	sudo npm install

### IF YOU DON'T HAVE POSTGRES...Install it:
1. A guide for mac: http://www.gotealeaf.com/blog/how-to-install-postgresql-on-a-mac

### Setup a new Postgres user and database
1. Setup a new user named martinweiss: 
2. Setup a new database called martinweiss: 
3. Add this pgkey to your environment variables (.bash_profile on mac)
	* CREATE USER martinweiss
	* CREATEDB martinweiss
	* vi ~/.bash_profile
	* export pgkey="postgres://martinweiss:@localhost/martinweiss"

### Start it up!
1. npm start
2. Navigate your web browser to http://localhost:8081/