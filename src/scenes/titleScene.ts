import { KeyManager } from "../utils/keymanager";

export class TitleScene extends Phaser.Scene {
    constructor() {
        //識別ID設定のみ
        super({
            key: "TitleScene"
        });
    }

    init():void{
        KeyManager.init(this);
    }
    //本来はこのメソッドで、画像ファイルなどのロード
    preload(): void {
        //今回はコンソール表示だけ
        console.log("Hello Phaser");
    }
    private startText?: Phaser.GameObjects.Text // 追加
    private ellipse?: Phaser.GameObjects.Ellipse // 追加

    private bk_color: string = '0xeeeeee' // 追加
    private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'red', fontSize: '70px' } //追加

    private static num:integer =0
    create():void {
        this.cameras.main.setBackgroundColor(this.bk_color)
        this.startText = this.add.text(parseInt(this.game.config.width.toString())/2, parseInt(this.game.config.height.toString())/2, ('Title'+TitleScene.num++), this.fontStyle)
        

        this.startText.setOrigin(0.5)
        this.startText.setInteractive()
        this.startText
        this.startText.on('pointerdown', () => {
            this.scene.start('TitleScene')
            console.log("clicked");
        })

        
        this.ellipse=this.add.ellipse(0,0,100,100,0x00ff00);


    }
    update():void{
        this.ellipse.x+=5;
        KeyManager.getButton();
    }
}