var colors = require("colors")

function encripta(toEncrypt){
  let abc =['_','-','1', '2', '3', '4', '5','6','7','8','9','0','a','b','c','d','e','f','@','g','h','i','j','.','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let encrypted = []

  for( let i=0; i < toEncrypt.length; i++){
      var num = (abc.indexOf(toEncrypt[i])+3) % abc.length;
      encrypted.push(abc[num]);
    }

  let encryptedJoined =   encrypted.join("");
  console.log(encryptedJoined.america)
  return encryptedJoined;

}
if (process.argv[2] == undefined){
  console.log("boludaaa".red);
}

if (process.argv[2] == "-v"){
  console.log("1.0.0".yellow);
}

if (process.argv[2] == "--encrypt" && process.argv[3] != undefined ){
  encripta(process.argv[3]);
}



//encripta("telefono")
