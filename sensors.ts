namespace House {    
    let light_variable = 0
    let temperature_variable = 0
	let humidity_variable = 0
	let heat_variable = 0
	let button_variable = 0
	let motion_variable = 0
	let flame_variable = 0
	let towngas_variable = 0
	
	let ledCommand = ""
	let vibratorCommand = ""
	let usbCommand = ""
	let buzzerCommand = ""
	let motor1Command = ""
	let motor2Command = ""
	let servoCommand = ""
	let generalCommand = ""
	
    // -------------- 1. Initialization ----------------
    //%blockId=initialize
    //%block="Initialize Smarthon multiple-sensor"
    //% weight=90	
    export function initializeWifi(): void {
        serial.redirect(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate9600);

        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
            let temp = serial.readLine()

            if (temp.charAt(0).compare("L") == 0) {

                light_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("T") == 0) {

                temperature_variable = parseInt(temp.substr(1, temp.length-2))

            }  else if (temp.charAt(0).compare("H") == 0) {

                humidity_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("A") == 0) {

                heat_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("B") == 0) {

                button_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("M") == 0) {

                motion_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("F") == 0) {

                flame_variable = parseInt(temp.substr(1, temp.length-2))

            } else if (temp.charAt(0).compare("O") == 0) {

                towngas_variable = parseInt(temp.substr(1, temp.length-2))

            }else {
                basic.showString(temp)
            }
        })

        basic.pause(5000);
    }

    //% blockId="smarthon_get_light" 
    //% block="Get light (Lx)"
    //% weight=80	
	//% blockGap=7	

    export function getLight(): number {
        return light_variable;
    }

    //% blockId="smarthon_get_temperature" 
    //% block="Get temperature (°C)"
    //% weight=79
	//% blockGap=7	

    export function getTemperature(): number {
        return temperature_variable;
    }
	
		
	//% blockId="smarthon_get_humidity" 
    //% block="Get humidity (%)"
    //% weight=78	
	//% blockGap=7	

    export function getHumidity(): number {
        return humidity_variable;
    }
	
	//% blockId="smarthon_get_heat" 
    //% block="Get heat"
    //% weight=77	
	//% blockGap=7	

    export function getHeat(): number {
        return heat_variable;
    }

	//% blockId="smarthon_get_button" 
    //% block="Get button pressed"
    //% weight=76	
	//% blockGap=7	

    export function getButton(): number {
        return button_variable;
    }

	
	//% blockId="smarthon_get_motion" 
    //% block="Get motion"
    //% weight=75	
	//% blockGap=7	

    export function getMotion(): number {
        return motion_variable;
    }

	//% blockId="smarthon_get_flame" 
    //% block="Get flame"
    //% weight=74	
	//% blockGap=7	

    export function getFlame(): number {
        return flame_variable;
    }
	//% blockId="smarthon_get_towngas" 
    //% block="Get town gas"
    //% weight=73
	//% blockGap=7	

    export function getTownGas(): number {
        return towngas_variable;
    }
	
	//% blockId="smarthon_red_LED"
    //% block="Set RED LED to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=49
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnRedLED(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P0, intensity);
    }
	
	//% blockId="smarthon_green_LED"
    //% block="Set Green LED to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=48
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnGreenLED(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P1, intensity);
    }
	
	//% blockId="smarthon_white_LED"
    //% block="Set White LED to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=47
	//%subcategory=More

	
    export function TurnWhiteLED(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P2, intensity);
    }
	
	//% blockId="smarthon_motorfan_cw"
    //% block="Set Motor fan clockwisely to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=46	
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnMotorCW(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P13, intensity);
    }
	
	//% blockId="smarthon_motorfan_acw"
    //% block="Set Motor fan anti-clockwisely to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=45
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnMotorACW(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P0, intensity);
    }
	
	
	//% blockId="smarthon_180_servo"
    //% block="Set 180 Servo to degree %degree"
    //% intensity.min=0 intensity.max=180
    //% weight=44
	//%subcategory=More
	//% blockGap=7	
	
    export function Turn180Servo(intensity: number): void {
			
		pins.servoWritePin(AnalogPin.P15, 180)
    }
	
		
	//% blockId="smarthon_360_servo"
    //% block="Set 360 Servo to degree %degree"
    //% intensity.min=0 intensity.max=180
    //% weight=43
	//%subcategory=More
	
    export function Turn360Servo(intensity: number): void {
			
		pins.servoWritePin(AnalogPin.P16, 180)
    }
	
	//% blockId="smarthon_buzzer"
    //% block="Set Buzzer to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=42
	//%subcategory=More	
	
    export function TurnBuzzer(intensity: number): void {
			
		pins.analogWritePin(AnalogPin.P14, intensity);
    }

}