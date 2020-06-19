//Basic Skeleton for the game include gameloop
//game -> config -> Scenes (Loading Assets,Create,Continuous Update)
//canvas object is auomatically called by phaser in config object 
//one scene represents one level.. more level represent more scenes
//this refers to the current object(Scene)
let prizes_config = {
    count:12,
    prize_names : ["3000 Credits","35% Off","Hard Luck","70% OFF","Swagpack","100% OFF","Netflix","50% Off","Amazon Voucher","2 Extra Spin", "CB Tshirt","CB Book"]
}

let config={
    type:Phaser.CANVAS,
    width:800,
    height:600,
    backgroundColor : 0xffcc00,
    scene :{
        preload:preload,
        create:create,
        update:update,
    }
}
//for assets    
function preload()
{
    console.log("Preload");
    //load background image 
    this.load.image('background','../Assets/back.jpg');
//    console.log(this);
    this.load.image('wheel','../assets/wheel.png');
    this.load.image('pin','../assets/pin.png');
    this.load.image('stand','../assets/stand.png');
}
//for objects
function create()
{
    console.log("Create");
    //display the image by creating the object 
    //width
    let W=game.config.width;
    let H=game.config.height;
    let background=this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
    //stand
    let stand=this.add.sprite(W/2,H/2+200,'stand');
    stand.setScale(0.25);
    
    //pin
    let pin=this.add.sprite(W/2,H/2-210,'pin');
    pin.setScale(0.25);
    pin.depth=1;

    //wheel
    //to create the object of the scene
    this.wheel=this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.20);
    
    //Event Listener for mouse click
    this.input.on('pointerdown',spinwheel,this);
    
    //set font for the text
    font_style={
        font : "bold 50px Roboto",
        align : "center",
        color :  "red",
    }
    //text object
    this.game_text=this.add.text(70,0,"Welcome to Spin And Win",font_style)
    
}

//fucnction for spinning the wheel
function spinwheel()
{
    console.log("Clicked the mouse");
     
    let rounds=Phaser.Math.Between(2,5);
    let degrees=Phaser.Math.Between(0,11)*30;
    let total_angle=rounds*360+degrees;
     
    let idx=prizes_config.count-1-Math.floor(degrees/(360/prizes_config.count));
    tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,  //angle generated randomly
        ease: "Cubic.easeOut",
        duration: 6000,
        callbackScope:this,
        onComplete:function(){
            this.game_text.setText("You won Something "+prizes_config.prize_names[idx]);
        }
    });
      
}
//gameloop(Changes/update) 
//alpha-0 opaque
//alpha-1 transparent
function update()
{
    console.log("Update");
//    this.wheel.angle+=1;
//    this.wheel.scaleX+=0.001;
//    this.wheel.scaleY+=0.001;
//    this.wheel.alpha-=0.001;
}
let game=new Phaser.Game(config);