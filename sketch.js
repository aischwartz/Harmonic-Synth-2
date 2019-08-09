

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
power1.colorize("accent","#ff0")
power1.colorize("fill","#555")
gain1.colorize("accent","#ff0")
gain1.colorize("fill","#555")
freq1.colorize("accent","#ff0")
freq1.colorize("fill","#555")

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
power2.colorize("accent","#11f01c")
power2.colorize("fill","#555")
gain2.colorize("accent","#1f1")
gain2.colorize("fill","#555")
freq2.colorize("accent","#1f1")
freq2.colorize("fill","#555")

"Osc3"
let power3 = new Nexus.Toggle("#power3");
let gain3 = new Nexus.Dial("#gain3",{
  "size": [75,75],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq3 = new Nexus.Dial("#frequency3",{
  "interaction": "vertical",
  "min": 100,
  "max": 10000
})

power3.colorize("accent","#f11")
power3.colorize("fill","#555")
gain3.colorize("accent","#f11")
gain3.colorize("fill","#555")
freq3.colorize("accent","#f11")
freq3.colorize("fill","#555")

document.body.style.backgroundColor = "#000";



// let osc;
let osc1;
let osc2;
let osc3;

function setup(){

  // createCanvas(window.innerWidth, window.innerHeight);
  // background(0);

// OSCILLATOR 1
  osc1 = new p5.Oscillator();
  osc1.setType("sine");
  osc1.freq(220);
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


// OSCILLATOR 2
  osc2 = new p5.Oscillator();
  osc2.setType("square");
  osc2.freq(440);
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

// OSCILLATOR 2
  osc3 = new p5.Oscillator();
  osc3.setType("triangle");
  osc3.freq(880);
  osc3.amp(0);

  power3.on('change',function(v) {
  // console.log(v)
    if(v == true){
      osc3.start()
    }
    if(v == false){
      osc3.stop()
    }
  });

  gain3.on('change',function(v) {
  // console.log(v)
    osc3.amp(v)
  });

  freq3.on('change',function(v) {
    // console.log(v)
    osc3.freq(v)
  });
}


  // function draw(){
  //   print(mouseX, mouseY);
  // }
