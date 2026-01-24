---
sidebar_position: 12
pagination_next: null
--- 

# Master
A simple mastering chain to control the final output of the mix. The processing chain includes a Bass Mono stage, which uses a [Linkwitz-Riley filter](https://en.wikipedia.org/wiki/Linkwitz%E2%80%93Riley_filter) to split the signal at a specified frequency and make it mono up to that frequency, as inspired by [Ableton Live's utility device](https://www.ableton.com/en/manual/live-audio-effect-reference/). After the Bass Mono stage, a compressor with three presets is available (soft/medium/hard) - or it may be turned off. 

The history of the last few samples is used to display a [lissajous curve](https://en.wikipedia.org/wiki/Lissajous_curve).



![screenshot of master page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260124/master.png)

#### Controls
- K2: Bass mono - sums the stereo mix into a mono mix up to a specified frequency:
    - 20Hz (off)
    - 50Hz
    - 100Hz
    - 200Hz
    - 20kHz (full mono)
- K3: Compressor preset - cycles back and forth due to sudden jumps in output levels.
    - off
    - soft
    - medium
    - hard
- E2: Drive (pre-compressor; 0dB to +24dB)
- E3: Output amp (-INF, -60dB to 0dB)

The settings of each compressor preset are as follows:

Soft:
- attack: 10ms
- release: 300ms
- ratio: 1:2
- threshold: -6dB

Medium:
- attack: 10ms
- release: 300ms
- ratio: 1:4
- threshold: -12dB

Hard:
- attack: 10ms
- release: 300ms
- ratio: 1:8
- threshold: -18dB

