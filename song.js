//declaring variables

var AlbumName="Please Excuse Me for Being Antisocial";
var SongName="The Box";
var ArtistName="Roddy Ricch";
var Genre="Hip-Hop/Rap";
var ReleasedDate="2019";
var AvailOnline="True";


//Output

console.log("Album Name:" +AlbumName);
console.log("Song Name:" +SongName);
console.log("Artist Name:" +ArtistName);
console.log("Genre: " +Genre);
console.log("Released Date: " +ReleasedDate);
console.log("Available Online:" +AvailOnline);


/*
Creating object using new method
*/

var SongDetails= new Object();
SongDetails ['Album Name'] ="In a Perfect World";
SongDetails ['Song Name'] ="All I Want";
SongDetails ['Artist Name'] ="Kodaline";
SongDetails ['Genre'] =" Alternative/Indie";
SongDetails ['ReleasedDate'] ="2012";
SongDetails ['AvailOnline'] ="Yes";

console.log(SongDetails);

/*
Nested Object
*/


var SongDetails1 = {
  AlbumName: "All Of Me (Spanish Version)",
  ArtistName: "Johnny Legend",
  AvailOnline: "Yes",
  Genre: " R&B/Soul",
  ReleasedDate: 2013,
  SongName: "All I Want",
  SongWriters:{
    Writer1: "	John Stephens",
    Writer2:"	Toby Gad",
  }
};

console.log(SongDetails1);

/*
Constructor Pattern for Creating the objects
*/

function Songdetails2(AlbumName, ArtistName, Genre, SongName, Releasedate, Availonline){
  this.AlbumName=AlbumName;
  this.ArtistName= ArtistName;
  this.Genre= Genre;
  this.SongName= SongName;
  this.Releasedate= Releasedate;
  this.Availonline=Availonline;
}

var songdetails3 = new Songdetails2('Millennium', 'Backstreet Boys', 'Pop', "Show Me the Meaning of Being Lonely", 1999, 'yes');

console.log(songdetails3);

/*
Creating Array
*/

var Songdetails4= new Array();
Songdetails4[0]='A Thousand Years';
Songdetails4[1]='Christina Perri';
Songdetails4[2]='The Twilight Saga: Breaking Dawn, Part 1: The Score';
Songdetails4[3]='2011';

console.log(Songdetails4);
