var bgimg;
var bg, playerimg, Wonder;
var enemyimg1, Tarkus,enemyimg2, enemyimg3, hog, mage, enemyimg4, goblin;
var gameState = "play";
var score = 0;
var lives = 3;
var selectimg, select;

function preload()
{
  bgimg = loadImage("images/background.jpg");

  fireimg = loadImage("images/aura.png");
  playerimg = loadImage("images/link_new.png");
  enemyimg1 = loadImage("images/Ganon_neutral.png");
  enemyimg2 = loadImage("images/Goblin.png");
  enemyimg3 = loadImage("images/hog.png");
  enemyimg4 = loadImage("images/mage_new.png");

  selectimg = loadImage("images/select.png");
}

function setup()
{
  createCanvas(1500,730);
  bg = createSprite(750,365,width,height);
  bg.addImage("bg",bgimg);
  bg.scale = 7;

  Wonder = createSprite(400,500,50,50);
  Wonder.addImage("Wonder",playerimg);
  Wonder.scale = 0.2;

  selectArrowT = createSprite(1450,515,200,200);
  selectArrowT.addImage("select",selectimg);
  selectArrowT.scale = 1.4;

  Tarkus = createSprite(1300,500,50,50);
  Tarkus.addImage("Tarkus",enemyimg1);
  Tarkus.scale = 1.2;

  selectArrowM = createSprite(1135,515,85,85);
  selectArrowM.addImage("select",selectimg);
  selectArrowM.scale = 0.8;

  mage = createSprite(1050,500,50,50);
  mage.addImage("mage",enemyimg4);
  mage.scale = 0.2;

  selectArrowH = createSprite(1232,270,100,100);
  selectArrowH.addImage("select",selectimg);
  selectArrowH.scale = 1;

  hog = createSprite(1150,300,50,50);
  hog.addImage("hog",enemyimg3);
  hog.scale = 0.3;
}

function draw()
{
  background(0);

 
  drawSprites();
}