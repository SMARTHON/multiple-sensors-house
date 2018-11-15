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
		
	//% blockId="smarthon_led"
    //% block="Set LED to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=50
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnLED(intensity: number): void {
			
		let newCommand = "o/8/" + intensity		
		if(ledCommand != newCommand){
			serial.writeLine(newCommand)
			ledCommand = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_vibrator"
    //% block="Set vibrator to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=49
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnVibrator(intensity: number): void {
			
		let newCommand = "o/13/" + intensity		
		if(vibratorCommand != newCommand){
			serial.writeLine(newCommand)
			vibratorCommand = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_usb"
    //% block="Set USB to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=48	
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnUSB(intensity: number): void {
			
		let newCommand = "o/4/" + intensity		
		if(usbCommand != newCommand){
			serial.writeLine(newCommand)
			usbCommand = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_buzzer"
    //% block="Set Buzzer to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=47	
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnBuzzer(intensity: number): void {
			
		let newCommand = "o/12/" + intensity		
		if(buzzerCommand != newCommand){
			serial.writeLine(newCommand)
			buzzerCommand = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_waterpump"
    //% block="Set Water pump to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=46	
	//%subcategory=More
	//% blockGap=7	
	
    export function TurnWaterpump(intensity: number): void {
			
		let newCommand = "o/6/" + intensity		
		if(motor1Command != newCommand){
			serial.writeLine(newCommand)
			motor1Command = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_servo"
    //% block="Set Servo to degree %degree"
    //% intensity.min=0 intensity.max=180
    //% weight=45	
	//%subcategory=More
	
    export function TurnServo(intensity: number): void {
			
		let newCommand = "v/7/" + intensity		
		if(servoCommand != newCommand){
			serial.writeLine(newCommand)
			servoCommand = newCommand
		}
		basic.pause(2000);
    }
	
	//% blockId="smarthon_output"
    //% block="Set output pin %pin| to intensity %intensity"
    //% intensity.min=0 intensity.max=1023
    //% weight=44	
	//%subcategory=More
	
    export function TurnOutput(pin: number, intensity: number): void {
			
		let newCommand = "o/" + pin + "/" + intensity		
		if(generalCommand != newCommand){
			serial.writeLine(newCommand)
			generalCommand = newCommand
		}
		basic.pause(2000);
    }

}