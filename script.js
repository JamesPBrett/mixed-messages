// Create 3 arrays to hold Movie Trivia.
const movieTrivia = {
    quotes: ["May the Force be with you. -Star Wars, 1977", "There's no place like home. -The Wizard of Oz, 1939", "I'm the king of the world! -Titanic, 1997", "Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989", "Elementary, my dear Watson. -The Adventures of Sherlock Holmes, 1939", "It's alive! It's alive! -Frankenstein, 1931", "My mama always said life was like a box of chocolates. You never know what you're gonna get. -Forrest Gump, 1994", "I'll be back! -The Terminator, 1984", "You're gonna need a bigger boat. -Jaws, 1975", "Here's looking at you, kid. -Casablanca, 1942", "My precious. -The Lord of the Rings: Two Towers, 2002", "Houston, we have a problem. -Apollo 13, 1995", "There's no crying in baseball! -A League of Their Own, 1992", "E.T. phone home. -E.T. the Extra-Terrestrial, 1982", "You can't handle the truth! -A Few Good Men, 1992", "A martini. Shaken, not stirred. -Goldfinger, 1964", "Life is a banquet, and most poor suckers are starving to death! -Auntie Mame, 1958", "If you build it, he will come. -Field of Dreams, 1989", "The stuff that dreams are made of. -The Maltese Falcon, 1941", "Magic Mirror on the wall, who is the fairest one of all? -Snow White and the Seven Dwarfs, 1937"],
    facts: ["Disney turned down the chance to make Back to the Future claiming the mother/son relationship was too risqué.", "The idea for the poster for The Usual Suspects came before any script or story.", "Paul Schrader wrote Taxi Driver in five days. It is rumoured he had a loaded gun by his desk for “inspiration and motivation”.", "William Goldman’s original script title for Butch Cassidy and the Sundance Kid was The Sundance Kid and Butch Cassidy. The names were reversed when Paul Newman took on the role of Butch.", "Like Facebook, Star Wars was originally prefixed by the definite article ‘The’. Much cleaner without it.", "In 1994, during one famous lunch at Pixar, filmmakers John Lasseter, Pete Docter and Joe Ranft came up with ideas that would eventually become A Bug’s Life, Finding Nemo, Monster Inc. and Wall-E. We’ll have what they’re having.", "George Lucas’ dog was named Indiana.", "Dan Akroyd’s original script for Ghostbusters was set in a future where Ghostbusters were everyday figures of society like paramedics and firemen.", "The US title for the exceptionally wonderful A Matter of Life and Death was Stairway to Heaven. The UK had no stairway. Denied.", "In the Stephen King novella for The Shawshank Redemption, Morgan Freeman’s Red is described as a white Irishman. The script sees Red sarcastically quip, “Maybe it’s cause I’m Irish” as a nod to the change.", "Among Patrick Bateman’s neighbours in the novel of American Psycho is one Tom Cruise.", "In the penultimate Ian Fleming 007 novel, You Only Live Twice, James Bond’s parents are revealed to be Scottish and Swiss.", "Robert Ludlum, the creator of the Jason Bourne series, died while the first Bourne film was in post-production.", "Fight Club and Choke author Chuck Palahnuik can be glimpsed ever so briefly in the final scene of the latter. He’s sitting next to Sam Rockwell on the plane.", "Novelist and screenwriter Nick Hornby is brother-in-law to novelist and screenwriter Robert Harris.", "The first notable film lensed by legendary cinematographer Roger Deakins was the 1984 adaptation of George Orwell’s 1984.", "Alan Rickman was dropped a second early to get his true reaction to falling from the Nakatomi Plaza in Die Hard."],
    casting: ["The Terminator (1984) – Sylvester Stallone as ‘The Terminator’", "The Hunt for Red October (1990) – Kevin Costner as ‘Jack Ryan’", "American Gigolo (1980) – John Travolta as ‘’Julian Kay”", "Top Gun (1986) – Matthew Modine as “Pete ‘Maverick’ Mitchell”", "Scooby Doo (1996) – Jim Carrey as ‘Shaggy’", "The Godfather (1972) – Burt Reynolds as ‘Sonny Corleone’", "Star Wars : A New Hope (1977) – Christopher Walken as ‘Han Solo’", "Boxing Helena (1993) – Kim Basinger as ‘Helena’", "The Godfather Part 3 (1990) – Winona Ryder as ‘Mary Corleone’", "Beverly Hills Cop (1984) – Sylvester Stallone as ‘Axel Foley’", "Die Hard (1988) –  Arnold Schwarzenegger as ‘John McClane’", "Silence of the Lambs (1991) – Michelle Pfeiffer as ‘Clarice Starling’", "Sleepless in Seattle (1993) – Julia Roberts as “Annie Reed”", "The Matrix (1999) – Tom Cruise as ‘Neo’", "Back to the Future (1985) – Johnny Depp as ‘Marty McFly’"]
};

// Get random trivia and print to console
const getRandomTrivia = () => {
    //
    const getRandomQuoteIndex = Math.floor(Math.random() * movieTrivia.quotes.length);
    const getRandomQuote = movieTrivia.quotes[getRandomQuoteIndex];
    const getRandomFactIndex = Math.floor(Math.random() * movieTrivia.facts.length);
    const getRandomFact = movieTrivia.facts[getRandomFactIndex];
    const getRandomCastingIndex = Math.floor(Math.random() * movieTrivia.casting.length);
    const getRandomCasting = movieTrivia.casting[getRandomCastingIndex];
    console.log(`---------------------------------------------------------------------
                --------------------------   MOVIE TRIVIA   --------------------------
                Today's 3 fun facts are:
                
                Movie Quote:     ${getRandomQuote}
                Movie Fact:      ${getRandomFact}
                Casting:         ${getRandomCasting}
                
                Please come back for more!     
                
                ---------------------------------------------------------------------       
    `)
};

getRandomTrivia();