#include <FastLED.h>
#define DATA_PIN 6  //this is the data pin connected to the LED strip.  If using WS2801 you also need a clock pin
#define NUM_LEDS 50 //change this for the number of LEDs in the strip
#define COLOR_ORDER RGB
#define DELAY 250

#define RED 0xFF004D
#define ORANGE 0xFFA300
#define YELLOW 0xFFEC27
#define GREEN 0x00E436
#define BLUE 0x29ADFF
#define INDIGO 0x83769C
#define PINK 0xFF77A8
#define OFF 0x000000

CRGB leds[NUM_LEDS]; 
//I have a few additional integers in here from different tests. 

long RAINBOW[7] = {BLUE, PINK, ORANGE, GREEN, YELLOW, RED, INDIGO};

String lookup[NUM_LEDS];

void setup(){
  Serial.begin(9600);
  FastLED.addLeds<WS2811, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS); //setting up the FastLED

  FastLED.setBrightness(32);
  lookup[0] = "a";
  lookup[1] = "b";
  lookup[2] = "c";
  lookup[3] = "d";
  lookup[5] = "e";
  lookup[6] = "f";
  lookup[7] = "g";
  lookup[8] = "h";
  lookup[11] = "i";
  lookup[12] = "j";
  lookup[13] = "k";
  lookup[14] = "l";
  lookup[15] = "m";
  lookup[17] = "n";
  lookup[18] = "o";
  lookup[19] = "p";
  lookup[20] = "q";
  lookup[21] = "r";
  lookup[22] = "s";
  lookup[23] = "t";
  lookup[24] = "u";
  lookup[27] = "v";
  lookup[28] = "w";
  lookup[29] = "x";
  lookup[30] = "y";
  lookup[31] = "z";
}

void loop(){
  snake();
  speak("abcdefghijklmnopqrstuvwxyz");
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
  delay(DELAY);
  leds[led] = OFF;
  FastLED.show();
  delay(DELAY);
}

void speak(String saying){
  for(int i = 0; i < saying.length(); i++) {
    int led = indexFromLetter(saying.charAt(i));
    blink(led);
  }
}

void alert(){
  int alertCount = 3;
  for (int n = 0; n < alertCount; n++) {
    on();
    off();
  }
}

void stripe(){
  int stripeDistance = 4;
  for (int n = 0; n < stripeDistance*3; n++) {
    for (int i = 0; i < NUM_LEDS; i++) {
      if((n+i) % stripeDistance == 0) {
        leds[i] = colorAt(i);
      } else {
        leds[i] = OFF;
      }
    }
    FastLED.show();
    delay(DELAY);
  }

  off();
}


void snake(){
  int distance = NUM_LEDS*3;
  
  for (int i = 0; i < distance; i++) {
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
    delay(25);
  }
  off();
}

long colorAt(int i){
  return RAINBOW[i % (sizeof(RAINBOW)/sizeof(long))];
}

int indexFromLetter(char letter){
  int index = 49;
  for (int i=0; i<NUM_LEDS; i++) {
    if (letter == lookup[i].charAt(0)) {
      index = i;
      break;
    }
  }
  return index;
}

