input.onPinPressed(TouchPin.P0, function () {
    if (gagne == 0) {
        gagne = 1
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(1)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (gagne == 0) {
        gagne = 1
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showNumber(2)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    gagne = 0
    basic.showIcon(IconNames.Ghost)
})
let gagne = 0
gagne = 0
basic.showIcon(IconNames.Heart)
