'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
// will take the last number in start stack and move it to last number on end stack
// need to get last index in length of array to array.length - 1 or array.slice(-1) 
const movePiece = (startStack, endStack) => {
  let lastStack = startStack.pop();
  // so if you chose "a" as startstack, then lastStack will equal 1! only for this first turn
  endStack.push(lastStack);
  // now endstack will be the same array as it was but with the last index of startStack added onto end of it, which changes the array
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2

const isLegal = () => {
  // Your code here
  if (startStack.slice(-1) < endStack.slice(-1)) {return turn};
  // if the starting stacks final number is smaller than the end stacks, then you can make that move according
  // to the rules
  if (startStack.slice(-1) > endStack.slice(-1)) {return false};
// if the last number in the array of startStack is larger than the last number in array of endstack, 
// then return false because that is against the rules
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // this function should win when the array on a stack other than 'a' is 4 , 3 , 2 , 1 

}

// When is this function called? What should it do with its argument?
// this is first function that is called
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let startingStack = stacks[startStack];
  // this is whatever the user choses to start at each time
  let endingStack = stacks[endStack];
// this is whatever user choses to end at per turn
movePiece(startingStack, endingStack);
// once startStack and end Stack are declared, we want to movePiece 

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
