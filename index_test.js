let expect = chai.expect;

describe("CreateDeck", function () {
  describe("#newDeck", function () {
    it("should create deck of 52 cards", function () {
      let testDeck = new Deck();
      console.log(testDeck.deck);
      expect(testDeck.deck.length).to.equal(52);
    });
  });
});

describe("SplitCards", function () {
  describe("#dealCards", function () {
    it("should split the deck into two arrays with 26 cards", function () {
      // Arrange //
      let splitDeck = new Deal();
      console.log(dealToPlayers.playerOneHand);
      // Assert
      expect(newDeck.deck.slice(0, 26).length).to.equal(26);
    });
  });
});
