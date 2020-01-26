var friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        res.json(findBestMatch(friends, req.body));
    })
}

function getDifference(person1, person2) {
    var difference = 0;
    for (var i = 0; i < person1.scores.length; i++) {
        difference += Math.abs(person1.scores[i] - person2.scores[i])
    }
    return difference;
}

function findBestMatch(friends, person) {
    var bestMatchDiff = getDifference(friends[0], person);
    var bestMatchPerson = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var currentDifference = getDifference(friends[i], person);
        if (currentDifference < bestMatchDiff) {
            bestMatchPerson = friends[i];
            bestMatchDiff = currentDifference;
        }
    }
    return bestMatchPerson;
}