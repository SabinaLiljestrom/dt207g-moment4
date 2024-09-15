#Moment 4 del 1 i kursen DT207g

##Sammanfattning
Detta är en webbtjänst för sutentisering och hantering av användarkonto med JWT-baserad sessionhantering. På webbtjänsten kan en användare registrera sig, logg ain och få yillgång till skyddade resurser. Lösenord lagras krypterat mha. hashning och skyddade routes är bara ttillgängliga för autentiserade användare. Webbtjänsten är utvecklad med Node.js, express, MongoDB som databas.

##Installation av databas
Klona ner projektet, installera paket med npm install, skapa env-fil och fyll i miljövariabler enligt .env.sample. Starta sedan servern med npm start.

##Användning CURD
Nedan finns beskrivet hur man använder webbtjänsten på olika vis:
| Metod         | Ändpunkt                 | Beskrivning      |
| ------------- |:------------------------:| ----------------:|
| GET           | /api/protected          | Åtkomst till en skyddad resurs. Kräver JWT-token i Authorization-headern.|
| POST           | /api/login      |   	Loggar in användare och returnerar en JWT-token. Kräver att objekt skickas med.|
| POST          | /api/register     |    Skapar ny användare. Kräver att ett objekt skickas med. |
| PUT           | /api/users/:id    |    Uppdaterar användardata (t.ex. användarnamn eller lösenord). Kräver att ett bjekt skickas med. |



Ett objekt skickas som JSON med följande struktur:
{
  "username": "användarnamn",
  "password": "lösenord"
}

###Utvecklad av
Sabina Liljeström
