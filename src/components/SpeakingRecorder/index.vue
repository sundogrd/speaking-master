<template>
  <div>
    <button ref="recordBtn" @click="startRecording">record</button>
    <button ref="stopBtn" @click="stopRecording" disabled>stop</button>

    <h2>Recordings</h2>
    <ul id="recordings-list">

    </ul>
  </div>
</template>

<script>
import Recorder from './recorder.js'
export default {
  name: 'recorder',
  props: {

  },
  data () {
    return {
      recorder: null
    }
  },
  computed: {
  },
  mounted () {
    try {
      // TODO: webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia
      window.URL = window.URL || window.webkitURL

      this.audio_context = new AudioContext()
      console.log('Audio context set up.')
      console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'))
    } catch (e) {
      alert('No web audio support in this browser!')
    }

    navigator.mediaDevices.getUserMedia({audio: true})
      .then(this.startUserMedia)
      .catch(e => {
        console.error('No live audio input: ' + e)
      })
  },
  methods: {
    startRecording () {
      this.recorder && this.recorder.record()
      // this.$refs['recordBtn'].disabled = true
      // this.$refs['recordBtn'].nextElementSibling.disabled = false
      console.log('Recording...')
    },
    stopRecording (button) {
      this.recorder && this.recorder.stop()
      // this.$refs['stopBtn'].disabled = true
      // this.$refs['stopBtn'].previousElementSibling.disabled = false
      console.log('Stopped recording.')
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
      // use microphone for Web Audio API source
      var input = this.audio_context.createMediaStreamSource(stream)
      console.log('Media stream created.')

      this.recorder = new Recorder(input)
      console.log('Recorder initialised.')
    }

  }
}
</script>
