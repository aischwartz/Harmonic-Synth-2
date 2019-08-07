


function setup(){

  // createCanvas(200, 500)
  // fill(0);

  // Create interfaces THIS HAD TO BE IN THE INDEX
  // var power = new Nexus.Toggle("#power");
  // var gain = new Nexus.Slider("#gain");

  // Create a sound source
  var volume = new Tone.Volume(-Infinity).toMaster();
  var synth = new Tone.Oscillator(220,"sine").connect(volume);

  // Listen for interface events
  power.on('change',function(v) {
  	v ? synth.start() : synth.stop();
  });

  gain.on('change',function(v) {
  	volume.volume.rampTo(v,.1)
  });
  gain.min = -100;
  gain.max = 0;
  gain.value = -30;

}
