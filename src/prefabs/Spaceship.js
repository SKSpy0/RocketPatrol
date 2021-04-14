//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        //add to existing scene
        scene.add.existing(this);
        //stores pointValue and pixels per frame
        this.points = pointValue;
        this.moveSpeed = 3;
    }

    update() {
        //move Spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}