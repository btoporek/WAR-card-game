let expect = chai.expect;

describe("MyFunctions", function () {
  describe("#newDeck", function () {
    it("should create deck of 52 cards", function () {
      let testDeck = new Deck();
      console.log(testDeck.deck);
      expect(testDeck.deck.length).to.equal(52);
    });
  });
});

describe("MyFunctions", function () {
  describe("#dealCards", function () {
    it("should split the deck into two arrays with 26 cards", function () {
      //dealCards();
      console.log(playerOneHand);
      expect(playerOneHand.length).to.have.lengthOf(26) &&
        playerTwoHand.length.to.have.lengthOf(26);
    });
  });
});
