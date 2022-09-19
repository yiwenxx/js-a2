
// data
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var leagueTable = "";
var highestWins = 0;
var leagueLeader = 0;

leagueTable = '<table> <tr> <th> Team </th> <th> Wins </th> <th> Losses </th> </tr>'

//leaders
for (var i=0; i<teams.length; i++){
    if(wins[i] >= highestWins){
      highestWins = wins[i];
      leagueLeader = i;
    }
}

//table
for (var i=0; i<teams.length; i++) {
    if(i!=leagueLeader) {
        leagueTable += '<tr>' + '<td>' + teams[i] + '</td>'
                + '<td>' + wins[i] + '</td>'
                + '<td>' + losses[i] + '</td>';
    } else {
        leagueTable += '<tr>' + '<td>' + '<strong>' + teams[i] + '</strong>'+'</td>'
                + '<td>' + '<strong>' + wins[i] + '</strong>' +'</td>'
                + '<td>'+ '<strong>'+ losses[i] + '</strong>' + '</td>';
    }
    
}

leagueTable += '</table>'
document.getElementById('league').innerHTML=leagueTable;





