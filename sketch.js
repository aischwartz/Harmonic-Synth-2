

"Osc1"
let power1 = new Nexus.Toggle("#power1");
let gain1 = new Nexus.Dial("#gain1",{
  "size": [60,60],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq1 = new Nexus.Dial("#frequency1",{
  "interaction": "vertical",
  "min": 100,
  "max": 15000,
  'size': [60,60]
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
  "size": [60,60],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq2 = new Nexus.Dial("#frequency2",{
  "interaction": "vertical",
  "min": 100,
  "max": 15000,
  'size': [60,60]
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
  "size": [60,60],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let freq3 = new Nexus.Dial("#frequency3",{
  "interaction": "vertical",
  "min": 100,
  "max": 15000,
  'size': [60,60]
})

"Osc4"
let power4 = new Nexus.Toggle("#power4");
let gain4 = new Nexus.Dial("#gain4",{
  "size": [60,60],
  "interaction": "vertical",
  "min": 0,
  "max": 1
});

let noise4 = new Nexus.Dial("lowpass4",{
  "interaction": "vertical",
  'size': [60,60]
})

power3.colorize("accent","#f11")
power3.colorize("fill","#555")
gain3.colorize("accent","#f11")
gain3.colorize("fill","#555")
freq3.colorize("accent","#f11")
freq3.colorize("fill","#555")

// document.style.backgroundColor = "#000";

fft = new p5.FFT();

// let piano = new Nexus.Piano("keyboard" ,{
//     'size': [500, 125],
//     'mode': 'toggle',
//     'lowNote': 24,
//     'highNote': 60
// })

// let osc;
let osc1;
let osc2;
let osc3;
let osc4;
let bandWidth;

function setup(){

  createCanvas(640, 200);
  // background(255, 0, 0);


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
  osc2.setType("sine");
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

// OSCILLATOR 3
  osc3 = new p5.Oscillator();
  osc3.setType("sine");
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


  // OSCILLATOR 4
    osc4 = new p5.Noise();
    osc4.setType("pink");
    filter4 = new p5.LowPass();
    // noise.connect(filter4);

    osc4.amp(0);

    // Listen for interface events
    power4.on('change',function(v) {
    // console.log(v)
      if(v == true){
        osc4.start()
      }
      if(v == false){
        osc4.stop()
      }
    });

    gain4.on('change',function(v) {
      // console.log(v)
      osc4.amp(v)
    });

    // freq4.on('change',function(v) {
      // console.log(v)
      // osc4.freq(v)

    noise4.on('change',function(v) {
      map(v,0,1,100,15000);
      console.log(v)
    });


  fft = new p5.FFT(0.8, 1024); //(smoothing, number of bands)
  let bandWidth = width;  // so that the bands take up the width of the canvas

}

function draw(){

  background(85, 85, 85); //background of the canvas needs to be here in draw
  let spectrum = fft.analyze(); //this looks at frequency
  stroke(255, 0, 255); //this will make the spectrum purple
  // console.log(spectrum);  //this is working
    for (let i = 0; i< spectrum.length; i++){ // i will loop from 0 to the length of the array [i]
      let amp = spectrum[i]; //this takes the amplitude numbers and puts them into the array [i]
      let y = map(amp, 0, 255, 200, 25);
      line(i, height, i, y);
    }
}
