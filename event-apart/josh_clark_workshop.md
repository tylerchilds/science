## Designing for Touch
by: Josh Clark

Responsive design taught us that there is no one output for the web.

Now we're learning there is no one true input for the web. This will fundamentally change how we design.

It's no longer just visual design. You're holding information in your hands. It's no longer how pixels look. It's how they feel.

Moving from visual designer to an industrial designer. Designing for a touch screen interface is designing for a physical interface.

How does it feel, what's the fastest most error free way to interact with this?

### Phone

You have to know how people hold their phone.

A study by observation on the street.

46% One handed, thumb touching. 
36% Cradled with one hand and tapping with the other
15% The blackberry prayer, two handed at the bottom.

75% of interactions are done with thumbs.

You want to keep the controls out of the way of the content. Fingers/hands/feet/legs don't obstruct the view.

Stacking content on toolbars at the bottom, is a bad idea.

On mobile, you don't know the environment. Your website could be inside an app in another app. A majority of time is spent of facebook and in the facebook browser. It's best to avoid pinning controls to the top and the bottom, because that's where system or browser controls are.

People don't come to your website to look at your navigation, they come for your content.

Navigation is a miserable last resort for the users. People look down the page and when they can't find what they want, then they go to the top of the page, or they go to the bottom to the footer.

Why not put an anchor link to the bottom of the page with the navigation? It's like a hamburger menu, but it's also where the user would want it.

Phone guidelines

iOS: controls at screen bottom
Android: controls at screen tob
web: controls at page bottom

### Phablets

New handed study due to phablets.

74% of phablet users use two hands.

35% cradle and use their pointers.
59% of users use thumbs still on phablets.
20% is one handed, still a large percentage.

On phablets, the thumb boundary is limited to roughtly the bottom 60% of the screen.

If the pinky props it, the thumb is relegated to the bottom part.

If the hand grips it, the top of the phone has a majority of the hit area.

Motion is a powerful cue that gestures might be used there. "It moved, maybe I can move it too"

For things that are built into browser, do you need to re-invent the wheel? Most people prefer to use in browser share buttons, rather than webpage ones.

Maybe on phablets, users can move controls within reach.

### Tablets

Tablets favor the sides of the screen rather than top and bottom, they are a two handed device. The bottom of the screen is basically hidden because of how tablets are used.

The top half of the screen becomes more important, but the top center is difficult to reach.

Tablet guidelines

* Favor sides and corners
* Avoid top center
* Use bottom only to see effect in canvas

### Gestures and interactions

Hover is a bonus gesture.
Touch target size: 7mm

MS did a study for touch target size for missed taps

1 in 30 at 5mm (3%)
1 in 100 at 7mm (1%)
1 in 200 at 9mm (.5%)

Reference pixels and virtual pixels are divorced from hardward pixels.

The new hottness is 44px is 7mm. Or 2.75rems
This is based on 160dpi.

web 44pixels
ios 44points
android 44 dp

You can tweak to be 44x30 in a pinch.

We're most accurate at the middle of the screen and the most clumsy at the edges. So larger in corners is a good idea.

For the hand, but also of the hand. We used to have mouse and cursor, but now we just have touch

We need to have at least 2mm spacing between elements, otherwise they need to be at least 9mm large.

Clarity trumps density. (progressive disclosure)
Give people a little bit at a time, a journey for the information.

Extra taps + clicks are not evil.

When you're not dealing with network requests, it's okay to have users click to get information. We want to get rid of the garbage clicks.

### Speed

Performance is a competetive advantage.

Speed can kill features we added on desktop. Like extra fields. How much can we do work on people's behalf?

First, middle, last => Name
Address 1, 2, 3, City, State, Zip => Address zip
Phone 123, day 123, fax 123 => Phone
Billing, only if they want it.
Credit card => don't need type

Be RUTHLESS with form fields.

Kill confirmation buttons. 

Gesture jiujitsu for defensive design. They require a moment of focus.

Speed kills detail views and carousels.

Who has to talk the stakeholders out of bad ideas?

> Wehn people tell you something is wrong, or doesn't work for them, they are almost always right. When they tell you exactly what they think is wrong or exactly how to fix it, they are almost always wrong.  

-Neil Gaiman

So focus on the problem and not the boss's solution.

Never show work you don't believe in. Don't make something just to show them how dumb it is.

You're not there to make them happy, you're there to make them successful.

Speed kills LONG scroll

the BEST TOUCH interface is sometime NO TOUCH at all.

### Gestures

Pinch to go back, to zoom out or to close.

Hands are far more expressive than being simple point and click gestures.

The more features that we have, the more buttons we need to have. That's how you know it's awesome. All the buttons.

Buttons add complexity. When things become part of our muscle memory, it becomes second nature and natural. The more buttons, the more sensory input, the more complex.

We've gone from many buttons input from games, to simple swipes to touching the environment and interacting directly with it.

Buttons are a hack. They were necessary, but now with touch, we can move away from it.

Coarse gestures over fine pecking. Why can't I swipe at the whole screen to hide something, instead of hitting back?

Gestures are the keyboard shortcuts of touch?

Buttons make you work, even if it doesn't seem like a lot of work.

No expression, visual complexity, no direct interaction, physical work.

#### Multi-finger

Multi-finger gestures: unsolved.

We need to experiment and play with this, to figure out how to solve it.

App: Uzu

It's more like playing an interface, not playing a musical instrument.

Physical data interacts with data objects.

Turning pages isn't done with buttons.

"What if these things were physical paper under the screen?"

What makes sense to interact with it?

### Interaction

Acts like is more important than looks like

<http://bit.ly/paper-mixer>

Be familiar with symbox or notation

Short hand and paper based interaction are good inspiration points.

You can't change the thickness of your finger. An alternative is to change the canvas size. We need to look at everything like it's brand new.

Whither the web?

<http://html5rocks.com/en/mobile/touch>

The browser hems you in, there are a lot of gestures that are leaving you with fewer options.

Radial menus, are up to three times faster. Tap and swipe are masterable.

This enables managing gesture density.

Gestures are the equivalent of keyboard shortcuts.

Standards are emerging, tap, swipe, pinch/spread, long tap

#### Designing for discoverability

Gestures are hidden and invisible.

Salt and pepper shakers are cultural convention. It doesn't matter what you _think_ is right, what matters is what the person who filled them up thinks.

We're the people filling the salt and pepper shakers of touch and gestures.

When you can see the salt and pepper, the message is the medium.

People won't read the manual. People hate manuals. Well, maybe they'll watch a video on it?

Play more video games. Games teach you in context.

* Coaching
* Leveling Up
* Power Ups

Walk them through with cues as they encounter new things.

But don't be clippy.

After they've done something normally several times, maybe show them the gesture shortcut.



