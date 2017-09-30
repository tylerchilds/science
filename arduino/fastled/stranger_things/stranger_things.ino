#include <HashMap.h>
#include <FastLED.h>
#define DATA_PIN 6  //this is the data pin connected to the LED strip.  If using WS2801 you also need a clock pin
#define NUM_LEDS 50 //change this for the number of LEDs in the strip
#define COLOR_ORDER RGB
#define DELAY 750

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

HashType<char*,int> hashRawArray[27]; 
HashMap<char*,int> lookup = HashMap<char*,int>( hashRawArray , 27 );

// array of colors
// mod 7

void setup(){
  FastLED.addLeds<WS2811, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS); //setting up the FastLED

   
  lookup[0]("a", 0);
  lookup[1]("b", 1);
  lookup[2]("c", 2);
  lookup[3]("d", 3);
  lookup[4]("e", 4);
  lookup[5]("f", 5);
  lookup[6]("g", 6);
  lookup[27](" ", NUM_LEDS+1);
}

void loop(){
  on();
  off();

  alert();

  stripe();

  alert();

  stripe();

}



void on(){
  for (int i = 0; i < NUM_LEDS; i++) {
    FastLED.setBrightness(32);
    leds[i] = RAINBOW[i % (sizeof(RAINBOW)/sizeof(long))];
  }
  FastLED.show();
  delay(DELAY);
}

void off(){
  FastLED.clear();
  FastLED.show();
  delay(DELAY);
}

void blink(int led){
  leds[led] = RAINBOW[led % (sizeof(RAINBOW)/sizeof(long))];
  FastLED.show();
  delay(DELAY);
  leds[led] = OFF;
  FastLED.show();
  delay(DELAY);
}
void speak(char* saying){
  for(char* it = saying; *it; ++it) {
    int led = lookup.getIndexOf(*it);
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
        leds[i] = RAINBOW[i % (sizeof(RAINBOW)/sizeof(long))];
      } else {
        leds[i] = OFF;
      }
    }
    FastLED.show();
    delay(DELAY);
  }

  off();
}
