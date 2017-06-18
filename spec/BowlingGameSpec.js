'use strict';

describe('BowlingGame', function () {
  var frame, nextFrame;
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
    frame = new Frame();
    nextFrame = new Frame();
  });

  it('can add a frame to the game', function () {
    bowlingGame.addFrame(frame);
    expect(bowlingGame.getFramesNum()).toEqual(1);
  });

  it('can calculate total score for the game', function () {
    spyOn(frame, "getFrameTotalScore").and.returnValue(9);
    spyOn(nextFrame, "getFrameTotalScore").and.returnValue(8);
    bowlingGame.addFrame(frame);
    bowlingGame.addFrame(nextFrame);
    expect(bowlingGame.getTotalScore()).toEqual(17);
  });

});
