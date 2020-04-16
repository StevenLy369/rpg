/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './char';
import { Enemy } from './enemy';
import { Battle } from './battle';


//Start with character creation button => character creation screen where user puts in data
function showImg(player) {
  if(player.profession == "Rouge"){
    $("#rouge-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Ranger"){
    $("#ranger-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Knight"){
    $("#knight-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Mage"){
    $("#mage-img").show();
    $("#monster-img").show();
  }
}

function displayCharacter(player){
  $("#name-display").text( `${player.name},` + ` ` +  `Level ${player.level}` + ` ` + `${player.profession}`);
  $("#pot1-display").text(`Small Healing Potions: ${player.inv.potionOne}`);
  $("#pot2-display").text(`Large Healing Potions: ${player.inv.potionTwo}`);
  $("#strength-display").text(`Strength: ${player.stats.strength}`);
  $("#int-display").text(`Intelligence: ${player.stats.intelligence}`);
  $("#dext-display").text(`Dexterity: ${player.stats.dexterity}`);
  $("#health-display").text(`Health: ${player.stats.health}`);
  $("#mana-display").text(`Mana: ${player.stats.mana}`);        
}

function updateStats(player){
  setInterval(() => {
    displayCharacter(player);
  }, 250);
  console.log(player.level);
}
 

$(document).ready(function(){
  let player;
  let battle = new Battle();
  let enemy = new Enemy();

  $("#startTheGame").click(function(event){
    event.preventDefault();
    $("#char-creation").show();
    $("#startTheGame").hide();
    $("#create").show();
    
  });
 
  $("#create").click(function(event){
    event.preventDefault();
    player = new Character($("#name").val(), $("#profession").val(),   $("#strength").val(), $("#intelligence").val(), $("#dexterity").val());
    enemy = enemy.enemyOne();
    $("#create").hide();
    $("#char-creation").hide();
    $("#attack").show();
    $("#char-display").show();
    updateStats(player);
    showImg(player);
    // randomBossGenerator();
    console.log(player);
  });

  $("#small-heal").click(function(event){
    event.preventDefault();
    player.smallHeal();
  });

  $("#attack").click(function(event){
    event.preventDefault();
    battle.attack(player, enemy);
  });
});
