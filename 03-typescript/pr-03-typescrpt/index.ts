
import {Breakfast} from "./Breakfast";
import {Lunch} from "./Lunch";
import {Dinner} from "./Dinner";


var crumbledEggs = new Breakfast(1000, 200, "salty");
var paella = new Lunch(1500, 800, "spicy");
var merluza = new Dinner(800,200,"fishy");

crumbledEggs.eat();
paella.eat();
merluza.eat();
