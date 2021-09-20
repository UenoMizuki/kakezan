import { Scene } from "phaser";

export class KeyManager {
    static A:Phaser.Input.Keyboard.Key
    static B:Phaser.Input.Keyboard.Key
    static C:Phaser.Input.Keyboard.Key
    static D:Phaser.Input.Keyboard.Key
    static E:Phaser.Input.Keyboard.Key
    static F:Phaser.Input.Keyboard.Key
    static G:Phaser.Input.Keyboard.Key
    static H:Phaser.Input.Keyboard.Key
    static I:Phaser.Input.Keyboard.Key
    static J:Phaser.Input.Keyboard.Key
    static K:Phaser.Input.Keyboard.Key
    static L:Phaser.Input.Keyboard.Key
    static M:Phaser.Input.Keyboard.Key
    static N:Phaser.Input.Keyboard.Key
    static O:Phaser.Input.Keyboard.Key
    static P:Phaser.Input.Keyboard.Key
    static Q:Phaser.Input.Keyboard.Key
    static R:Phaser.Input.Keyboard.Key
    static S:Phaser.Input.Keyboard.Key
    static T:Phaser.Input.Keyboard.Key
    static U:Phaser.Input.Keyboard.Key
    static V:Phaser.Input.Keyboard.Key
    static W:Phaser.Input.Keyboard.Key
    static X:Phaser.Input.Keyboard.Key
    static Y:Phaser.Input.Keyboard.Key
    static Z:Phaser.Input.Keyboard.Key
    static UP:Phaser.Input.Keyboard.Key
    static DOWN:Phaser.Input.Keyboard.Key
    static LEFT:Phaser.Input.Keyboard.Key
    static RIGHT:Phaser.Input.Keyboard.Key
    static SPACE:Phaser.Input.Keyboard.Key
    static ESCAPE:Phaser.Input.Keyboard.Key
    static init(scene : Scene):void{
        console.log("init");
        this.A = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.getButton();
    }
    public static getButton():void{
        console.log("a");
    }
}