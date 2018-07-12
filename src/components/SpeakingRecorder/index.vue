<template>
  <div>
    <h1>Recorder.js simple WAV export example</h1>

    <p>Make sure you are using a recent version of Google Chrome.</p>
    <p>Also before you enable microphone input either plug in headphones or turn the volume down if you want to avoid ear splitting feedback!</p>

    <button ref="recordBtn" @click="startRecording">record</button>
    <button ref="stopBtn" @click="stopRecording" disabled>stop</button>

    <h2>Recordings</h2>
    <ul id="recordingslist"></ul>

    <h2>Log</h2>
    <pre id="log"></pre>
  </div>
</template>

<script>
import Recorder from './recorder.js'
function __log (e, data) {
  document.getElementById('log').innerHTML += '\n' + e + ' ' + (data || '')
}
export default {
  name: 'recorder',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      recorder: null
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  },
  mounted () {
    try {
    // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia
      window.URL = window.URL || window.webkitURL

      this.audio_context = new AudioContext()
      __log('Audio context set up.')
      __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'))
    } catch (e) {
      alert('No web audio support in this browser!')
    }

    navigator.mediaDevices.getUserMedia({audio: true})
      .then(this.startUserMedia)
      .catch(e => {
        __log('No live audio input: ' + e)
      })
  },
  methods: {
    startRecording () {
      this.recorder && this.recorder.record()
      this.$refs['recordBtn'].disabled = true
      this.$refs['recordBtn'].nextElementSibling.disabled = false
      __log('Recording...')
    },
    stopRecording (button) {
      this.recorder && this.recorder.stop()
      this.$refs['stopBtn'].disabled = true
      this.$refs['stopBtn'].previousElementSibling.disabled = false
      __log('Stopped recording.')

      // create WAV download link using audio data blob
      this.createDownloadLink()

      this.recorder.clear()
    },
    createDownloadLink () {
      this.recorder && this.recorder.exportWAV(function (blob) {
        var url = URL.createObjectURL(blob)
        var li = document.createElement('li')
        var au = document.createElement('audio')
        var hf = document.createElement('a')

        au.controls = true
        au.src = url
        hf.href = url
        hf.download = new Date().toISOString() + '.wav'
        hf.innerHTML = hf.download
        li.appendChild(au)
        li.appendChild(hf)
        document.getElementById('recordingslist').appendChild(li)
      })
    },
    startUserMedia (stream) {
      var input = this.audio_context.createMediaStreamSource(stream)
      __log('Media stream created.')
      // Uncomment if you want the audio to feedback directly
      // input.connect(audio_context.destination);
      // __log('Input connected to audio context destination.');

      this.recorder = new Recorder(input)
      __log('Recorder initialised.')
    }

  }
}
</script>
