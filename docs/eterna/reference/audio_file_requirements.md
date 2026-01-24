---
pagination_prev: null
pagination_next: null
---
# Audio file requirements

<div className="content-container">


### Length
The maximum supported sample length is 16,777,216 samples ($2²⁴$).
This equals approximately 5:48 at 48 kHz.
Files with other sample rates will reach this limit at different durations.


### Channels
Eterna loads a single audio file, referred to as a _sample_. This file can be mono (1 channel), stereo (2 channels), or multichannel.

A multichannel file is not a special format — it’s simply an audio file that contains more than two channels. You can think of it as several mono tracks bundled together inside one file.

### File format
Eterna supports `WAV`and `AIFF` files.

### Sample rate
The sample rate of a loaded audio file should be 48 kHz; other sample rates will be played back at incorrect pitch. This is because Eterna uses SuperCollider’s audio engine, which is configured to run at 48,000 samples per second.

Audio files recorded at a different sample rate (for example 44.1 kHz) are not automatically resampled on load. Instead, they are played back as if they were 48 kHz files, which makes them sound too fast and higher in pitch (or too slow and lower in pitch, depending on the original rate).

</div>