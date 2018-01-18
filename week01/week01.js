function confirmSport(guess) {
    if (guess.toLower == soccer) {
        alert("YOU WIN!");
    } else if (guess.toLower == tennis) {
        alert("Close! That's my second favorite. But...what is \"close\"?");
    } else {
        alert("No");
    }
}