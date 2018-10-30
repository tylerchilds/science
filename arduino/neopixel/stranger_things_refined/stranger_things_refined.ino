#include <Adafruit_NeoPixel.h>

#define PIN 6
#define NUM_LEDS 100 //change this for the number of LEDs in the strip

#define DELAY_SLOW 500
#define DELAY 250
#define DELAY_FAST 100

#define RED 0x53000F  
#define YELLOW 0xD5A700
#define GREEN 0x174C00
#define BLUE 0x190894
#define ORANGE 0x693000
#define OFF 0x000000

#define HIGH_BRIGHTNESS 160
#define LOW_BRIGHTNESS 80

long RAINBOW[4] = {BLUE, GREEN, YELLOW, RED};
String lookup[NUM_LEDS + 1];

Adafruit_NeoPixel strip = Adafruit_NeoPixel(100, PIN, NEO_RGB + NEO_KHZ400);

void setup() {
  strip.begin();
  strip.setBrightness(HIGH_BRIGHTNESS);
  strip.show(); // Initialize all pixels to 'off'

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
  on();
  speak("abcdefghijklmnopqrstuvwxyz");
}

void loop() {
  communicationFromTheUpsideDown("stranger things");
  communicationFromTheUpsideDown("run");
  communicationFromTheUpsideDown("upsidedown"); 
}


void communicationFromTheUpsideDown(String saying){
  pulse();
  delay(DELAY);
  pulse();
  wallCrawl();
  delay(DELAY_SLOW);
  pulse();
  pulse();
  delay(DELAY_FAST);
  turnDown(HIGH_BRIGHTNESS, 0);
  strip.setBrightness(HIGH_BRIGHTNESS);
  delay(DELAY);
  clear();

  speak(saying);
}

void on(){
  uint16_t i;

  for(i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, colorAt(i));
  }
  strip.show();
  
  delay(DELAY);
}


void clear(){
  uint16_t i;

  for(i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, OFF);
  }
  strip.show();
}

void off(){
  clear();
  delay(DELAY);
}

void blink(int led){
  strip.setPixelColor(led, colorAt(led));
  strip.show();
  delay(DELAY_SLOW);
  strip.setPixelColor(led, OFF);
  strip.show();
  delay(DELAY_SLOW);
}

void speak(String saying){
  clear();
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

void wallCrawl(){
  clear();

  for(int n = NUM_LEDS; n > -6; n-=uptake(n)){
    for(int i=NUM_LEDS; i > n; i--) {
      if(i >= 0){
        strip.setPixelColor(i, colorAt(i));
      }
    }
    strip.show();
    delay(DELAY);
  }
  on();
}

int uptake(int n){
  return random(1, 6);
}

void pulse(){
  turnDown(HIGH_BRIGHTNESS, LOW_BRIGHTNESS);
  turnUp(LOW_BRIGHTNESS, HIGH_BRIGHTNESS);
}

void turnDown(int from, int to){
  int difference = from - to;
  int steps = 15;
  int stepSize = difference / steps;

  for (int i=0; i < steps; i++) {
    strip.setBrightness(from - (stepSize*i));
    strip.show();
    delay(25);
  }
}


void turnUp(int from, int to){
  int difference = to - from;
  int steps = 15;
  int stepSize = difference / steps;

  for (int i=0; i < steps; i++) {
    strip.setBrightness(from + (stepSize*i));
    strip.show();
    delay(25);
  }
}

long colorAt(int i){
  return RAINBOW[i % (sizeof(RAINBOW)/sizeof(long))];
}

int indexFromLetter(char letter){
  int index = strip.numPixels();
  for (int i=0; i<strip.numPixels(); i++) {
    if (letter == lookup[i].charAt(0)) {
      index = i;
      break;
    }
  }
  return index;
}
