class NeurobrinqScratchExtension {
    constructor(runtime) {
        this.runtime = runtime
        this.serverAddress = 'http://192.168.20.10:85'
    }

    getInfo() {
        return {
            id: "Neurobrinq",
            name: "Neurobrinq devices",
            blocks: [{
                opcode: "toggleDevice",
                // blockType: this is the block type; the most common ones for extensions are:
                // "command": does something but doesn't return a value
                // "reporter": returns a string or number
                // "Boolean": returns a boolean (note the capitalization)
                // "hat": event catching block; if your Scratch code uses this block, the Scratch runtime regularly polls the associated method which returns a boolean to say whether the event has happened
                blockType: "command",
                text: "toggle [deviceName]",
                arguments: {
                    deviceName: {
                        type: "number",
                        defaultValue: "0",
                        menu: "simpleDevice"
                    },
                },
            },
            ],
            menus: {
                simpleDevice: [
                    'TV',
                    'Diffuser 1',
                    'Diffuser 2',
                    'Diffuser 3',
                    'Diffuser 4',
                    'Fan',
                    'Soap Bubbles',
                    'Sprinkler',
                    'Laser',
                    'Tube Compressor'
                ],
                rgbDevice: [
                    'Tube Color',
                    'Fiber',
                    'Ball Pool',
                    'Perimetral Led',
                    'Lamp 1',
                    'Lamp 2',
                    'Lamp 3',
                    'Lamp 4',
                    'Lamp 5',
                    'Lamp 6',
                    'Lamp 7',
                    'Cloud 1',
                    'Cloud 2',
                    'Cloud 3',
                    'Cloud 4',
                    'Cloud 5'
                ],
                onOff: ['on', 'off'],
            },
        };
    }

    toggleDevice({ deviceName }) {
        console.log("Requesting", `${this.serverAddress}/{deviceName}`)
        fetch(`${this.serverAddress}/{deviceName}`)
    }
}

(function () {
    var extensionInstance = new NeurobrinqScratchExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
