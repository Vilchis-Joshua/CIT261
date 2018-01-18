function confirmSport(guess) {
    if (guess.toLowerCase() == 'soccer') {
        alert("YOU WIN!");
    } else if (guess.toLowerCase() == 'tennis') {
        alert("Close! That's my second favorite. But...what is \"close\"?");
    } else {
        alert("No");
    }
}