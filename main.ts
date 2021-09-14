controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Curtile = Curtile + 1
    mySprite.setImage(Tiles[Curtile])
    if (Curtile == 2) {
        Curtile = 0
        mySprite.setImage(Tiles[Curtile])
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTileAt(tiles.locationOfSprite(mySprite), mySprite.image)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right))
    }
})
function Show_Instuctions (text: string) {
    story.setSoundEnabled(false)
    story.printDialog(text, 80, 90, 50, 150, 1, 0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom))
    }
})
let mySprite: Sprite = null
let Tiles: Image[] = []
let Curtile = 0
Curtile = 0
info.setScore(25)
Tiles = [assets.tile`myTile1`, assets.tile`myTile4`]
let Costs = [25, 50]
Curtile = 0
tiles.setSmallTilemap(tilemap`level1`)
mySprite = sprites.create(Tiles[0], SpriteKind.Player)
Show_Instuctions("Go to the place where you want to be a house")
Show_Instuctions("Then press 'A'")
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        info.changeScoreBy(5)
    }
    pause(1000)
})
