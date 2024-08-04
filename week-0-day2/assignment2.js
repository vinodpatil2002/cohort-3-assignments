function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(18)); // true
console.log(canVote(17)); // false