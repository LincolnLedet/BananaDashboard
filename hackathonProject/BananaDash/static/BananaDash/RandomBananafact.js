function getRandomBananaFact() {
    // Array of banana facts
    const bananaFacts = [
      "Bananas are berries, scientifically speaking.",
      "The banana plant is the largest herbaceous flowering plant.",
      "Bananas float in water because they are less dense in comparison.",
      "There are over 1,000 varieties of bananas grown worldwide.",
      "The scientific name for banana is 'Musa Sapientum', which means 'fruit of the wise men'.",
      "Bananas are naturally radioactive due to the presence of potassium-40.",
      "Bananas can help in overcoming depression due to high levels of tryptophan, which the body converts to serotonin.",
      "Eating bananas can lower the body temperature and cool you down during a fever or on a hot day.",
      "The inside of a banana peel can help relieve itching and inflammation, such as from bug bites or poison ivy.",
      "Bananas are the world's most popular fruit, with over 100 billion consumed annually."
    ];
  
    // Generate a random index based on the length of the bananaFacts array
    const randomIndex = Math.floor(Math.random() * bananaFacts.length);
  
    // Return the banana fact at the randomly selected index
    return bananaFacts[randomIndex];
  }
  
  function showBananaFact() {
    // Get a random banana fact
    const fact = getRandomBananaFact();
    // Display the fact in the div with the id 'bananaFactDisplay'
    document.getElementById('bananaFactDisplay').innerText = fact;
  }