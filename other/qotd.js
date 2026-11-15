const thomasJefferson = ["The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
"[T]here is nothing I would not sacrifice to a practicable plan of abolishing every vestige of this moral and political depravity [slavery].",
"Determine never to be idle. No person will have occasion to complain of the want of time, who never loses any. It is wonderful how much may be done, if we are always doing.",
"[U]nder the law of nature, all men are born free, every one comes into the world with a right to his own person, which includes the liberty of moving and using it at his own will.",
"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their creator certain unalienable rights, that among these are Life, Liberty, and the Pursuit of Happiness.",
"The legitimate powers of government extend to such acts only as are injurious to others. It does me no injury for my neighbor to say there are twenty gods or no god. It neither picks my pocket nor breaks my leg.",
"On matters of style, swim with the current, on matters of principle, stand like a rock."]

const abrahamLincoln = ["That on the first day of January, in the year of our Lord one thousand eight hundred and sixty-three, all persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free...",
"Why, bless your soul, Ed [Sen. Edward Dickinson Baker], that [saving piglets from drowning] was the very essence of selfishness. I would have had no peace of mind all day had I gone on and left that suffering old sow worrying over those pigs. I did it to get peace of mind, don't you see?",
"Whatever you are, be a good one.",
"Do I not destroy my enemies when I make them my friends?",
"America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.",
"When I do good, I feel good. When I do bad, I feel bad. That's my religion.",
"Those who deny freedom to others, deserve it not for themselves."]

const theodoreRoosevelt = ["'[S]peak softly and carry a big stick; you will go far.'",
"The credit belongs to the man who is actually in the arena...",
"All young men should take an active part in our political life and should do their full duty as citizens in the exercise of their rights of self-government...",
"The man who really counts in the world is the doer, not the mere critic - the man who actually does the work, even if roughly and imperfectly, not the man who only talks or writes about how it ought to be done.",
"Leave it [nature] as it is.",
"Preserve the forests...",
"All civilized Governments are now realizing that it is their duty here and there to preserve certain defined districts, with the wild things thereon, the destruction of which means the destruction of half the charm of wild nature."]

const fdr = ["[T]he only thing we have to fear is fear itself...",
"The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little.",
"I'm not the smartest fellow in the world, but I can sure pick smart colleagues.",
"Democracy cannot succeed unless those who express their choice are prepared to choose wisely. The real safeguard of democracy, therefore, is education.",
"In this war [WWII], we know, books are weapons. And it is a part of your dedication always to make them weapons for man's freedom.",
"We know now that Government by organized money is just as dangerous as Government by organized mob.",
"Yes, the Nazis and the Fascists have asked for it - and they are going to get it."]

const jfk = ["We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard...",
"Many years ago, the great British explorer George Mallory, who was to die on Mount Everest, was asked why did he want to climb it? He said, 'Because it is there.' Well, space is there...",
"Freedom has many difficulties and democracy is not perfect, but we have never had to put a wall up to keep our people in, to prevent them from leaving us.",
"Freedom is indivisible, and when one man is enslaved, all are not free.",
"All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words 'Ich bin ein Berliner.'",
"My fellow Americans, let us take that first step. Let us...step back from the shadow of war and seek out the way of peace.",
"There is a connection, hard to explain logically but easy to feel, between achievement in public life and progress in the arts. The age of Pericles was also the age of Phidias. The age of Lorenzo de Medici was also the age of Leonardo da Vinci. The age Elizabeth also the age of Shakespeare. And the New Frontier for which I campaign in public life, can also be a New Frontier for American art."]

const mlk = ["The masses of people are rising up. And wherever they are assembled today, whether they are in Johannesburg, South Africa; Nairobi, Kenya; Accra, Ghana; New York City; Atlanta, Georgia; Jackson, Mississippi; or Memphis, Tennessee - the cry is always the same: 'We want to be free.'",
"Well, I don't know what will happen now. We've got some difficult days ahead. But it really doesn't matter with me now, because I've been to the mountaintop.",
"Somewhere I read that the greatness of America is the right to protest for right. And so just as I say, we aren't going to let dogs or water hoses turn us around, we aren't going to let any injunction turn us around. We are going on.",
"We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protests to degenerate into physical violence...",
"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
"Let freedom ring from Stone Mountain of Georgia. Let freedom ring from Lookout Mountain of Tennessee. Let freedom ring from every hill and molehill of Mississippi, from every mountain side. Let freedom ring...",
"We cannot walk alone... We cannot turn back... We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality."]

const harveyMilk = ["All I ask is for the [LGBTQ+ rights] movement to continue, and if a bullet should enter my brain, let that bullet destroy every closet door...",
"The fact is that more people have been slaughtered in the name of religion than for any other single reason. That, that my friends, that is true perversion!",
"Hope will never be silent.",
"I know you can't live on hope alone; but without hope, life is not worth living. So you, and you and you: you got to give them hope; you got to give them hope.",
"Rights are won only by those who make their voices heard.",
"Protect my home, protect my streets, protect my car, protect my life, protect my property...worry about becoming a human being and not about how you can prevent others from enjoying their lives because of your own inability to adjust to life.",
"All young people, regardless of sexual orientation or identity, deserve a safe and supportive environment in which to achieve their full potential."]

const quoteLists = [thomasJefferson,abrahamLincoln,theodoreRoosevelt,fdr,jfk,mlk,harveyMilk]

const date = new Date()
let day = String(date.getDate())
let month = String(date.getMonth() + 1)
let year = String(date.getFullYear())

function setQuoteOfTheDay(input){
    //speaker = Math.floor(Math.random() * quoteLists.length);
    //quote = Math.floor(Math.random() * quoteLists[speaker].length);

    d = 0;
    quoteNum = 0;

    for (var m = 1; m < month - 1; m++){
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
            d += 31;
        } else if (m == 4 || m == 6 || m == 9 || m == 11){
            d += 30;
        } else {
            d += 28;
   
            if (year % 4 == 0){
                d += 1;
            }
        }

        d += Number(day);
    }

    d -= 1

    if (d > 49){
        quoteNum = d % 49;
    } else {
        quoteNum = d;
    }

    speaker = Math.ceil(quoteNum / 7) - 1
    if (quoteNum > 7){
        quote = quoteNum % 7;
    } else {
        quote = quoteNum;
    }

    

    if (input == 0){
        output = speaker
    } else if (input == 1){
        output = quote
    }

    return output;
}

function displayDate(){
    dateText = month + "/" + day + "/" + year
    document.getElementById("date").textContent = dateText;
}

function displaySpeaker(){
    speakerText = "";

    if (speaker == 0){
        speakerText = "President Thomas Jefferson";
    } else if (speaker == 1){
        speakerText = "President Abraham Lincoln";
    } else if (speaker == 2){
        speakerText = "President Theodore Roosevelt";
    } else if (speaker == 3){
        speakerText = "President Franklin Delano Roosevelt";
    } else if (speaker == 4){
        speakerText = "President John Fitzgerald Kennedy";
    } else if (speaker == 5){
        speakerText = "Dr. Rev. Martin Luther King Jr.";
    } else{
        speakerText = "Supervisor Harvey Milk";
    }

    document.getElementById("speaker").textContent = speakerText;
}

function displayQuote(){
    quoteText = '"' + quoteLists[setQuoteOfTheDay(0)][setQuoteOfTheDay(1)] + '"'
    document.getElementById("quote").textContent = quoteText;
}

displayQuote();
displaySpeaker();
displayDate();