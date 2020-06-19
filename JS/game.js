//Basic Skeleton for the game include gameloop
//game -> config -> Scenes (Loading Assets,Create,Continuous Update)
//canvas object is auomatically called by phaser in config object 
//one scene represents one level.. more level represent more scenes
//this refers to the current object(Scene)
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
    let pin=this.add.sprite(W/2,H/2-220,'pin');
    pin.setScale(0.30);
    pin.depth=1;

    //wheel
    let wheel=this.add.sprite(W/2,H/2,'wheel');
    wheel.setScale(0.20);
    
    
    
}
//gameloop(Changes/update) 
function update()
{
    console.log("Update");
}
let game=new Phaser.Game(config);