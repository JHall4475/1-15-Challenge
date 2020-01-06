import React, {Component} from 'react';
import './day1.css';
class Day1 extends Component{

    // function playSound(e){
    //     const audio = 
    //     const key = 
    //     if(!audio) return;

    // }

    render(){
        return(
            <div className="one-wrpr">
                <div className="keys">
                    <div data-key="65" className="key">
                        <kbd>A</kbd>
                        <span className="sound">clap</span>
                        <audio data-key="65" src="sounds/clap.wav"></audio>
                    </div>
                    <div data-key="83" className="key">
                    <kbd>S</kbd>
                    <span className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key">
                    <kbd>D</kbd>
                    <span className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key">
                    <kbd>F</kbd>
                    <span className="sound">openhat</span>
                    </div>
                    <div data-key="71" className="key">
                    <kbd>G</kbd>
                    <span className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key">
                    <kbd>H</kbd>
                    <span className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key">
                    <kbd>J</kbd>
                    <span className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key">
                    <kbd>K</kbd>
                    <span className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key">
                    <kbd>L</kbd>
                    <span className="sound">tink</span>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Day1;