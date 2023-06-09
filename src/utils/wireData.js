
export const electrictParamsAWG = {

    resistance: {
        Cu: {
            PVC: {
                750: 0.062,
                500: 0.089,
                350: 0.125,
                300: 0.144,
                250: 0.171,
                '4/0': 0.203,
                '2/0': 0.328,
                '1/0': 0.394,
                2: 0.623,
                4: 1.02,
                6: 1.61,
                8: 2.56,
                10: 3.94,
                12: 6.56,
                14: 10.17
            },
            ACERO: {
                750: 0.069,
                500: 0.095,
                350: 0.128,
                300: 0.148,
                250: 0.177,
                '4/0': 0.207,
                '2/0': 0.328,
                '1/0': 0.394,
                2: 0.66,
                4: 1.02,
                6: 1.61,
                8: 2.56,
                10: 3.94,
                12: 6.56,
                14: 10.17
            }

        },

        Al: {
            PVC: {
                750: 0.095,
                500: 0.141,
                350: 0.200,
                300: 0.233,
                250: 0.279,
                '4/0': 0.328,
                '2/0': 0.525,
                '1/0': 0.656,
                2: 1.05,
                4: 1.67,
                6: 2.66,
                8: 4.27,
                10: 6.56,
                12: 10.49,
                14: 15.17
            },
            ACERO: {
                750: 0.102,
                500: 0.148,
                350: 0.207,
                300: 0.236,
                250: 0.282,
                '4/0': 0.328,
                '2/0': 0.525,
                '1/0': 0.656,
                2: 1.05,
                4: 1.67,
                6: 2.66,
                8: 4.27,
                10: 6.56,
                12: 10.49,
                14: 15.17
            }
        }
    },

    inductance: {
        PVC: {
            750: 0.125,
            500: 0.128,
            350: 0.164,
            300: 0.135,
            250: 0.135,
            '4/0': 0.135,
            '2/0': 0.141,
            '1/0': 0.144,
            2: 0.148,
            4: 0.157,
            6: 0.167,
            8: 0.171,
            10: 0.164,
            12: 0.177,
            14: 0.19
        },
        ACERO: {
            750: 0.157,
            500: 0.157,
            350: 0.164,
            300: 0.167,
            250: 0.171,
            '4/0': 0.167,
            '2/0': 0.177,
            '1/0': 0.18,
            2: 0.187,
            4: 0.197,
            6: 0.21,
            8: 0.213,
            10: 0.207,
            12: 0.223,
            14: 0.24
        }
    }
}

export const CurrentAWG = {

    Cu: {

        60: {
            400: 750,
            320: 500,
            260: 350,
            240: 300,
            215: 250,
            195: '4/0',
            145: '2/0',
            125: '1/0',
            95: 2,
            70: 4,
            55: 6,
            40: 8,
            30: 10,
            20: 12,
            15: 14
        },

        75: {
            475: 750,
            380: 500,
            310: 350,
            285: 300,
            255: 250,
            230: '4/0',
            175: '2/0',
            150: '1/0',
            115: 2,
            85: 4,
            65: 6,
            50: 8,
            35: 10,
            25: 12,
            20: 14
        },

        90: {
            535: 750,
            430: 500,
            350: 350,
            320: 300,
            290: 250,
            260: '4/0',
            195: '2/0',
            170: '1/0',
            130: 2,
            95: 4,
            75: 6,
            55: 8,
            40: 10,
            30: 12,
            25: 14
        }
    },

    Al: {

        60: {
            320: 750,
            260: 500,
            210: 350,
            195: 300,
            170: 250,
            150: '4/0',
            115: '2/0',
            100: '1/0',
            75: 2,
            55: 4,
            40: 6,
            35: 8,
            25: 10,
            15: 12,
            10: 14
        },

        75: {
            385: 750,
            310: 500,
            250: 350,
            230: 300,
            205: 250,
            180: '4/0',
            135: '2/0',
            120: '1/0',
            90: 2,
            65: 4,
            50: 6,
            40: 8,
            30: 10,
            20: 12,
            12: 14
        },

        90: {
            435: 750,
            350: 500,
            280: 350,
            260: 300,
            230: 250,
            205: '4/0',
            150: '2/0',
            135: '1/0',
            100: 2,
            75: 4,
            55: 6,
            45: 8,
            35: 10,
            25: 12,
            15: 14
        }
    }
}
