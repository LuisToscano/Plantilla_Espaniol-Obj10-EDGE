/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"zoomUtilities.js",
            js+"dragAndDropUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '76px', '1658px', '164px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;Artículo indefinido</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">9</span><span style=\"font-size: 30px;\">&nbsp;</span>Identifique el artículo indefinido que corresponde con el sustantivo.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin:0px\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin:0px\"><span style=\"font-size: 30px;\">​</span><span style=\"font-weight: 400; font-style: italic; font-size: 30px;\">Instrucción: lea, seleccione y arrastre el artículo al sustantivo según  corresponda.</span></p><p style=\"margin:0px\"><span style=\"font-weight: 400; font-style: italic; font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-style: italic;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-style: italic;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-style: italic;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '248px', '1830px', '532px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'DROP_3',
                                symbolName: 'DROP_3',
                                type: 'rect',
                                rect: ['806px', '278px', '109', '48', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_4',
                                symbolName: 'DROP_4',
                                type: 'rect',
                                rect: ['806px', '359px', '109', '48', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_2',
                                symbolName: 'DROP_2',
                                type: 'rect',
                                rect: ['806px', '186px', '109', '48', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_1',
                                symbolName: 'DROP_1',
                                type: 'rect',
                                rect: ['806px', '90px', '109', '48', 'auto', 'auto']
                            },
                            {
                                id: 'DRAG_1',
                                symbolName: 'DRAG_1',
                                type: 'rect',
                                rect: ['477px', '90px', '94', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_2',
                                symbolName: 'DRAG_2',
                                type: 'rect',
                                rect: ['477px', '359px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_3',
                                symbolName: 'DRAG_3',
                                type: 'rect',
                                rect: ['477px', '186px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_4',
                                symbolName: 'DRAG_4',
                                type: 'rect',
                                rect: ['477px', '275px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'texto_8',
                                type: 'text',
                                rect: ['964px', '291px', '229px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">pera</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'texto_9',
                                type: 'text',
                                rect: ['961px', '368px', '323px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">papayas</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'texto_7',
                                type: 'text',
                                rect: ['965px', '195px', '274px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">bananos</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'texto_6',
                                type: 'text',
                                rect: ['964px', '98px', '298px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">tomate</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid53",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_1}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid56",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DRAG_2}",
                            '477px',
                            '477px'
                        ],
                        [
                            "eid46",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DRAG_3}",
                            '477px',
                            '477px'
                        ],
                        [
                            "eid50",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_3}",
                            '806px',
                            '806px'
                        ],
                        [
                            "eid49",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DRAG_4}",
                            '275px',
                            '275px'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_3}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_4}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DRAG_4}",
                            '477px',
                            '477px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DRAG_3}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_2}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_1}",
                            '806px',
                            '806px'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DRAG_2}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid60",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_2}",
                            '806px',
                            '806px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_4}",
                            '806px',
                            '806px'
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DRAG_1}",
                            '477px',
                            '477px'
                        ],
                        [
                            "eid59",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DRAG_1}",
                            '90px',
                            '90px'
                        ]
                    ]
                }
            },
            "DRAG_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['0px', '3px', '94px', '38px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'center',
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px; line-height: 20px;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 26px;\">Las</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DRAG_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['0px', '3px', '94px', '38px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'center',
                            id: 'texto_3',
                            text: '<p style=\"margin: 0px; line-height: 20px;\"><span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 26px;\">La</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DRAG_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['-14px', '3px', '116px', '38px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'center',
                            id: 'texto_5',
                            text: '<p style=\"margin: 0px; line-height: 20px;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 26px;\">Los</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DRAG_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; line-height: 20px;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 26px;\">El</span></p>',
                            rect: ['-12px', '3px', '114px', '38px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DROP_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy3',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DROP_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DROP_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "DROP_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lec1_obj10-09_edgeActions.js");
})("EDGE-14164065");
