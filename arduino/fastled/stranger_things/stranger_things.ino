#include <FastLED.h>
#define DATA_PIN 6  //this is the data pin connected to the LED strip.  If using WS2801 you also need a clock pin
#define NUM_LEDS 100 //change this for the number of LEDs in the strip
#define COLOR_ORDER RGB
#define DELAY_SLOW 500
#define DELAY 250
#define DELAY_FAST 100

#define RED 0x53000F
#define YELLOW 0xD5A700
#define GREEN 0x174C00
#define BLUE 0x190894
#define WHITE 0xEEEEEE
#define OFF 0x000000

#define HIGH_BRIGHTNESS 200
#define LOW_BRIGHTNESS 120

CRGB leds[NUM_LEDS]; 
//I have a few additional integers in here from different tests. 

long RAINBOW[4] = {BLUE, GREEN, YELLOW, RED};

String lookup[NUM_LEDS];

void setup(){
  FastLED.addLeds<WS2811, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS); //setting up the FastLED

  FastLED.setBrightness(HIGH_BRIGHTNESS);
  lookup[82] = "a";
  lookup[80] = "b";
  lookup[78] = "c";
  lookup[75] = "d";
  lookup[72] = "e";
  lookup[69] = "f";
  lookup[66] = "g";
  lookup[62] = "h";
  lookup[60] = "i";
  lookup[57] = "j";
  lookup[54] = "k";
  lookup[51] = "l";
  lookup[48] = "m";
  lookup[1] = "n";
  lookup[3] = "o";
  lookup[6] = "p";
  lookup[8] = "q";
  lookup[11] = "r";
  lookup[14] = "s";
  lookup[17] = "t";
  lookup[20] = "u";
  lookup[22] = "v";
  lookup[24] = "w";
  lookup[27] = "x";
  lookup[29] = "y";
  lookup[33] = "z";
  lookup[NUM_LEDS] = " ";

  randomSeed(analogRead(0));
}

void loop(){
  doSomething();
  delay(random(4, 10) * 30000);
}

void doSomething(){
  int range = random(100);


  if(range < 45){
    alert();
  } else

 

  if(range < 100){
    pulse();
  }
}

void sayAnything(){
  int range = random(100);

  if(range < 5){
    speak("the quick brown fox jumped over the lazy dog");
  } else
  
  if(range < 40){
    speak("help me");
  } else

  if(range < 60){
    speak("behind you");
  } else

  if(range < 80){
    speak("upsidedown");
  } else

  if(range < 100){
    speak("dont blink");
  }

 
}

void on(){
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = colorAt(i);
  }
  FastLED.show();
  delay(DELAY);
}

void clear(){
  FastLED.clear();
  FastLED.show();
}

void off(){
  clear();
  delay(DELAY);
}

void blink(int led){
  leds[led] = colorAt(led);
  FastLED.show();
  delay(DELAY_SLOW);
  leds[led] = OFF;
  FastLED.show();
  delay(DELAY_SLOW);
}

void speak(String saying){
  off();
  for(int i = 0; i < saying.length(); i++) {
    int led = indexFromLetter(saying.charAt(i));
    blink(led);
  }
  on();
}

void alert(){
  int alertCount = 3;
  for (int n = 0; n < alertCount; n++) {
    off();
    on();
  }
}

void stripe(){
  off();
  
  int stripeDistance = 4;
  for (int n = 0; n < stripeDistance*3; n++) {
    for (int i = NUM_LEDS; i >= 0 ; i--) {
      if((n+i) % stripeDistance == 0) {
        leds[i] = colorAt(i);
      } else {
        leds[i] = OFF;
      }
    }
    FastLED.show();
    delay(DELAY_FAST);
  }
}


void snake(){
  off();
  
  int distance = NUM_LEDS*3;
  
  for (int i = NUM_LEDS; i >= 0; i--) {
    clear();

    int led0 = i % NUM_LEDS;
    int led1 = (i-1) % NUM_LEDS;
    int led2 = (i-2) % NUM_LEDS;
    int led3 = (i-3) % NUM_LEDS;
    
    leds[led0] = colorAt(led0);
    leds[led1] = colorAt(led1);
    leds[led2] = colorAt(led2);
    leds[led3] = colorAt(led3);

    FastLED.show();
    delay(10);
  }
}

void pulse(){
  on();
  
  int difference = HIGH_BRIGHTNESS - LOW_BRIGHTNESS;
  int steps = 15;
  int stepSize = difference / steps;

  for (int i=0; i < steps; i++) {
    FastLED.setBrightness(HIGH_BRIGHTNESS - (stepSize*i));
    FastLED.show();
    delay(20);
  }

  for (int i=0; i < steps; i++) {
    FastLED.setBrightness(LOW_BRIGHTNESS + (stepSize*i));
    FastLED.show();
    delay(20);
  }
}

long colorAt(int i){
  return RAINBOW[i % (sizeof(RAINBOW)/sizeof(long))];
}

int indexFromLetter(char letter){
  int index = NUM_LEDS;
  for (int i=0; i<NUM_LEDS; i++) {
    if (letter == lookup[i].charAt(0)) {
      index = i;
      break;
    }
  }
  return index;
}

