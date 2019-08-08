
// let synth = new Nexus.Rack("#synth")

let power = new Nexus.Toggle("#power1");
let gain = new Nexus.Dial("#gain1",{
  "size": [75,75],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});
let freq = new Nexus.Dial("#frequency1",{
  "interaction": "vertical",
  "min": 100,
  "max": 10000
})
// let power2 = new Nexus.Toggle("#power2");
// let gain2 = new Nexus.Slider("#gain2");

let osc;

function setup(){

  // createCanvas(window.innerWidth, window.innerHeight);
  // background(0);

    osc = new p5.Oscillator();
    osc.setType("sine");
    osc.freq(100);
    osc.amp(0);



  // Listen for interface events
  power.on('change',function(v) {
  // console.log(v)
  if(v == true){
    osc.start()
  }
  if(v == false){
    osc.stop()
  }
  });

  gain.on('change',function(v) {
  // console.log(v)
  osc.amp(v)
  });

  freq.on('change',function(v) {
  console.log(v)
  osc.freq(v)
  });
}

  // function draw(){
  //   print(mouseX, mouseY);
  // }
