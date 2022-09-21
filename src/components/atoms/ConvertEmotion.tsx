import React from 'react'

type Emotion = {
    Angry: string,
    Fear: string,
    Happy: string,
    Sad: string,
    Surprise: string
}

const ConvertEmotion = (prop: Emotion) => {
    const Emotionlist = ["Angry", "Fear", "Happy", "Sad", "Surprise", "None"]

    if (parseInt(prop.Angry) === 1) {
        return Emotionlist[0]
    } else if (parseInt(prop.Fear) === 1) {
        return Emotionlist[1]
    } else if (parseInt(prop.Happy) === 1) {
        return Emotionlist[2]
    } else if (parseInt(prop.Sad) === 1) {
        return Emotionlist[3]
    } else if (parseInt(prop.Surprise) === 1) {
        return Emotionlist[4]
    } else {
        return Emotionlist[5]
    }
}

export default ConvertEmotion