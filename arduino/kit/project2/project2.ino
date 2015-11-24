int switchState = 0;

void setup() {
  // map the pins for the spaceship interface
  // LEDs are output
  // button is input
  pinMode(3, OUTPUT); // green
  pinMode(4, OUTPUT); // red
  pinMode(5, OUTPUT); // red
  pinMode(2, INPUT); // button
  Serial.begin(9600);
}

void loop() {
  // store the state of pin 2
  switchState = digitalRead(2);

  Serial.println(switchState);
  if(switchState == LOW){
    // button is not pressed

    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);
  } else {
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, HIGH);

    delay(250);
    digitalWrite(4, HIGH);
    digitalWrite(5, LOW);
    delay(250);
  }
}
