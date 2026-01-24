---
sidebar_position: 1
pagination_prev: null
---

# Sample

Load a sample from disk with K2; the file path becomes the title of the window and shows the duration of the sample. Drive (E2) is available to boost the amplitude of all channels in parallel.

###### Supported formats
- WAV/AIFF at 48kHz - other sample rates will be played back at incorrect pitch
- mono, stereo or multichannel (max. 6 channels)
- Max 5m48s duration; longer samples will be trimmed to this length

![screenshot of sample page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260124/sample.png)


#### Controls
- K2: Select sample
- E2: Drive - applies a 0-24dB boost, to each channel equally, soft-clipped using a [tanh function](http://gdsp.hf.ntnu.no/lessons/3/17/).