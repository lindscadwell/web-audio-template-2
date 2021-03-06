// Create a pitch shifter and connect its output to the master out
var pitchShift = new Tone.PitchShift().toMaster();

var reverb = new Tone.JCReverb( 0.5 ).toMaster();


// Create a synth and connect it to the pitch shifter
var synth = new Tone.Synth( {
  oscillator: {
    type: 'sawtooth'
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.5,
    release: 1
  }
} ).connect( pitchShift );


// Drop Down Menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction ()
{
  document.getElementById( "myDropdown" ).classList.toggle( "show" );
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function ( event )
{
  if ( !event.target.matches( '.dropbtn' ) )
  {
    var dropdowns = document.getElementsByClassName( "dropdown-content" );
    var i;
    for ( i = 0; i < dropdowns.length; i++ )
    {
      var openDropdown = dropdowns[ i ];
      if ( openDropdown.classList.contains( 'show' ) )
      {
        openDropdown.classList.remove( 'show' );
      }
    }
  }
}




// Variables for different sound files
// Kick drums
var kick1 = new Tone.Player( 'audio/kick1.mp3' ).chain( pitchShift );
var kick2 = new Tone.Player( 'audio/kick2.mp3' ).chain( pitchShift );
var kick3 = new Tone.Player( 'audio/kick3.mp3' ).chain( pitchShift );
var kick4 = new Tone.Player( 'audio/kick4.mp3' ).chain( pitchShift );

// Snare drums
var snare1 = new Tone.Player( 'audio/snare1.mp3' ).chain( pitchShift );
var snare2 = new Tone.Player( 'audio/snare2.mp3' ).chain( pitchShift );
var snare3 = new Tone.Player( 'audio/snare3.mp3' ).chain( pitchShift );
var snare4 = new Tone.Player( 'audio/snare4.mp3' ).chain( pitchShift );

// Hi-Hats
var hh1 = new Tone.Player( 'audio/hh1.mp3' ).chain( pitchShift );
var hh2 = new Tone.Player( 'audio/hh2.mp3' ).chain( pitchShift );
var hh3 = new Tone.Player( 'audio/hh3.mp3' ).chain( pitchShift );
var hh4 = new Tone.Player( 'audio/hh4.mp3' ).chain( pitchShift );

// Crashes
var crash1 = new Tone.Player( 'audio/crash1.mp3' ).chain( pitchShift );
var crash2 = new Tone.Player( 'audio/crash2.mp3' ).chain( pitchShift );
var crash3 = new Tone.Player( 'audio/crash3.mp3' ).chain( pitchShift );
var crash4 = new Tone.Player( 'audio/crash4.mp3' ).chain( pitchShift );

// Percussion
var perc1 = new Tone.Player( 'audio/chords4.mp3' ).chain( pitchShift );
var perc2 = new Tone.Player( 'audio/chords4.mp3' ).chain( pitchShift );
var perc3 = new Tone.Player( 'audio/chords4.mp3' ).chain( pitchShift );
var perc4 = new Tone.Player( 'audio/chords4.mp3' ).chain( pitchShift );

// Bass
var bass1 = new Tone.Player( 'audio/kick1.mp3' ).chain( pitchShift );
var bass2 = new Tone.Player( 'audio/kick1.mp3' ).chain( pitchShift );
var bass3 = new Tone.Player( 'audio/kick1.mp3' ).chain( pitchShift );
var bass4 = new Tone.Player( 'audio/kick1.mp3' ).chain( pitchShift );

// Lead synth
var synth1 = new Tone.Player( 'audio/synth1.mp3' ).chain( pitchShift );
var synth2 = new Tone.Player( 'audio/synth2.mp3' ).chain( pitchShift );
var synth3 = new Tone.Player( 'audio/synth3.mp3' ).chain( pitchShift );
var synth4 = new Tone.Player( 'audio/synth4.mp3' ).chain( pitchShift );

// Chords
var chords1 = new Tone.Player( 'audio/chords1.mp3' ).chain( pitchShift );
var chords2 = new Tone.Player( 'audio/chords2.mp3' ).chain( pitchShift );
var chords3 = new Tone.Player( 'audio/chords3.mp3' ).chain( pitchShift );
var chords4 = new Tone.Player( 'audio/chords4.mp3' ).chain( pitchShift );

// Pads
var pad1 = new Tone.Player( 'audio/pad1.mp3' ).chain( pitchShift );
var pad2 = new Tone.Player( 'audio/pad2.mp3' ).chain( pitchShift );
var pad3 = new Tone.Player( 'audio/pad3.mp3' ).chain( pitchShift );
var pad4 = new Tone.Player( 'audio/pad4.mp3' ).chain( pitchShift );
























// Sample code to load a sound file
// NOTE: This sound file is not played in this script
var clave = new Tone.Player( 'audio/clave.mp3' ).toMaster();

// Bind slider value to pitch shift amount
// Every change in slider value triggers change in pitch shift
// It's silly to pitch shift a synthesizer, right?
// But what else could we pitch shift?
var pitchShiftLabel = document.querySelector( '#pitchShiftLabel' );
var pitchShiftSlider = document.querySelector( '#pitchShiftSlider' );
pitchShiftSlider.addEventListener( 'input', function ()
{
  // assign slider value to pitch shift amount (in semitones)
  pitchShift.pitch = pitchShiftSlider.value;
  // update slider label
  pitchShiftLabel.innerHTML = pitchShiftSlider.value;
} );

// The following block of code will run when the play button is clicked
document.querySelector( '#playButton' ).onclick = function ()
{
  console.log( 'The play button has been clicked.' );

  // Play a middle C, which will sound until the stop button is clicked
  synth.triggerAttack();
};

// The following block of code will run when the stop button is clicked
document.querySelector( '#stopButton' ).onclick = function ()
{
  console.log( 'The stop button has been clicked.' );

  // Stop the note from sounding
  synth.triggerRelease();

};
