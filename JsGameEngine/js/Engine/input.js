import Component from "./component";

class Input extends Component{
    constructor(){
        super(); //parent component class
        this.keys = {};
        this.gamepadIndex = null;
        document.addEventListener("keydown", (event) =>(this.keys[event.code] = true));
        document.addEventListener("keyup", (event) =>(this.keys[event.code] = false));

        window.addEventListener("gamepad connected", (event) => {
            console.log("Gamepad connected", event.gamepad);
            this.gamepadIndex = event.gamepad.index;
        });
        window.addEventListener("gamepad disconnected", (event) => {
            console.log("Gamepad disconnected", event.gamepad);
            this.gamepadIndex = null;
        });
    }
    isKeyDown(key){
        return this.keys[key]|| false;
    }

    getGamepad(){
        if(this.gamepadIndex !== null){
            const gamepads = navigator.getGamepads();
            return gamepads[this.gamepadIndex];
        }
        return null;
    }
    isGamepadButtonDown(){
        const gamepad = this.getGamepad();
            if(gamepad && gamepad.buttons[buttonIndex]){
                return gamepad.buttons[buttonIndex].pressed;
            }
            return false;
    }
}
export default Input;