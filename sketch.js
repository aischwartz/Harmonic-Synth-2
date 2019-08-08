
"Osc1"
let power1 = new Nexus.Toggle("#power1");
let gain1 = new Nexus.Dial("#gain1",{
  "size": [75,75],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq1 = new Nexus.Dial("#frequency1",{
  "interaction": "vertical",
  "min": 100,
  "max": 10000
})

"Osc2"
let power2 = new Nexus.Toggle("#power2");
let gain2 = new Nexus.Dial("#gain2",{
  "size": [75,75],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq2 = new Nexus.Dial("#frequency2",{
  "interaction": "vertical",
  "min": 100,
  "max": 10000
})


let osc;
let osc1;
let osc2;

function setup(){

  // createCanvas(window.innerWidth, window.innerHeight);
  // background(0);

  osc1 = new p5.Oscillator();
  osc1.setType("sine");
  osc1.freq(100);
  osc1.amp(0);



  // Listen for interface events
  power1.on('change',function(v) {
  // console.log(v)
    if(v == true){
      osc1.start()
    }
    if(v == false){
      osc1.stop()
    }
  });

  gain1.on('change',function(v) {
    // console.log(v)
    osc1.amp(v)
  });

  freq1.on('change',function(v) {
    // console.log(v)
    osc1.freq(v)
  });


  osc2 = new p5.Oscillator();
  osc2.setType("square");
  osc2.freq(100);
  osc2.amp(0);

  power2.on('change',function(v) {
  // console.log(v)
    if(v == true){
      osc2.start()
    }
    if(v == false){
      osc2.stop()
    }
  });

  gain2.on('change',function(v) {
  // console.log(v)
    osc2.amp(v)
  });

  freq2.on('change',function(v) {
    // console.log(v)
    osc2.freq(v)
  });
}


  // function draw(){
  //   print(mouseX, mouseY);
  // }
