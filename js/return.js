var dbRef = firebase.database();var btn1 = dbRef.ref('lamp');btn1.on('value', function(snapshot) {    console.log("Lamp:" + snapshot.val());    document.querySelector("#lampface > input").checked = snapshot.val();});var btn2 = dbRef.ref('lamp1');btn2.on('value', function(snapshot) {    console.log("Lamp1:" + snapshot.val());    document.querySelector("#Lampnext > input").checked = snapshot.val();});var btn3 = dbRef.ref('lamp2');btn3.on('value', function(snapshot) {    console.log("Lamp2:" + snapshot.val());    document.querySelector("#lampnext1 > input").checked = snapshot.val();});var btn4 = dbRef.ref('lamp3');btn4.on('value', function(snapshot) {    console.log("Lamp3:" + snapshot.val());    document.querySelector("#lampnext2 > input").checked = snapshot.val();});// btn+x = dbRef.ref('lamp'+ x);//       btn+x.on('value', function(snapshot) {//         console.log("lamp"+x":"+snapshot.val());// });