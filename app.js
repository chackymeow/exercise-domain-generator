
let pronoun = ['the', 'our', 'their', 'your'];
let adj = ['great', 'big', 'fast', 'beautiful'];
let noun = ['dog', 'cat', 'jogger', 'racoon'];
let ext = ['.com', '.net', '.io', '.cr']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < ext.length; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + ext[l])
            }
        }
    }
}
