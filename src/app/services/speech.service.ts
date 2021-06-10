import { Injectable } from '@angular/core';
import Speech from 'speak-tts'

const speech = new Speech();
@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { }


  textToSpeech(message: string) {
    if (speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported");

      speech.speak({
        text: message,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          // onboundary: event => {
          //   console.log(
          //     event.name +
          //     " boundary reached after " +
          //     event.elapsedTime +
          //     " milliseconds."
          //   );
          // }
        }
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
        console.error("An error occurred :", e)
      })

    } else {
      alert("speech synthesis not supported");
      console.log("speech synthesis not supported");
    }
  }
}
