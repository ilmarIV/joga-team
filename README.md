# Kirjeldus

Tegu on mitme lehelise veebilehega, kust on võimalik lugeda erinevaid jooga teemalisi artikleid. Kõik artiklid on ilustatud piltidega ning avanevad uuel lehel. Andmeid hoitakse mysql andmebaasis.

<br/>
<br/>

# Vajalik Tarkvara

Veebilehe toimimiseks vajalikud tarkvarad on:

## Node.js

Node.js on vajalik javascripti käivitamiseks väljaspool brauserit. See võimaldab javascripti kasutada serveri poolsete rakenduste loomiseks.

### Node paigaldamine

sudo apt install nodejs<br/>
node -v<br/>
sudo apt install npm<br/>
<br/>

## mysql2

Mysql2 on andmebaasihaldussüsteem. See võimaldab andmeid salvestada, hallata ja töödelda.

### mysql2 paigaldamine

npm install mysql2

<br/>

## Express ja Express handlebars

Express on kiire ja minimalistlik Node.js veebiraamistik, mis lihtsustab HTTP-serverite ja API-de loomist.<br/>
Express-Handlebars on mallimootor Expressi jaoks, mis võimaldabdünaamiliselt renderdada HTML-malle Handlebarsi süntaksiga.

### Express ja Express-handlebars paigaldamine

npm install express express-handlebars

<br/>
<br/>

# Projekti paigaldamine

git clone https://github.com/ilmarIV/joga-team.git<br/>
või<br/>
`git clone git@github.com:ilmarIV/joga-team.git`

<br/>
<br/>

# Projekti käivitamine

- esmakordselt:<br/>
    npm install<br/>
    npm start<br/>

- korduvalt:<br/>
    npm start<br/>

Avage veebibrauser ja minge aadressile http://localhost:3020

<br/>
<br/>

# Projekti kasutamine

Veebibrauseris on võimalik avada artikleid, avada nende tekste, vaadata pilte ja artikleid kustutada. Lisaks on võimalik kõikide artiklite kustutamise korral need taastada.

<br/>
<br/>

# Arendajad

Eleriin<br/>
Ilmar<br/>
Tanel
